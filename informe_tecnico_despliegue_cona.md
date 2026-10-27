# INFORME TÉCNICO DE IMPLEMENTACIÓN Y DESPLIEGUE
**Proyecto:** Sistema de Encuesta - Navidad del Niño Constructor 2026  
**Cliente:** CONAFOVICER  
**Dominio de Producción:** [https://navidad2026.conafovicer.com](https://navidad2026.conafovicer.com)  
**Fecha:** Octubre 2026  
**Estado:** Operativo / 100% en Producción  

---

## 1. Resumen Ejecutivo
El presente informe documenta las acciones técnicas llevadas a cabo para la puesta en marcha del sistema web de encuestas **Navidad del Niño Constructor 2026**. 

La aplicación fue desarrollada sobre **Next.js (React) en arquitectura Standalone (Node.js)** y actualmente se encuentra respondiendo satisfactoriamente bajo el subdominio institucional con protocolo seguro **HTTPS (SSL)**, sin exponer direcciones IP ni puertos internos al usuario final.

---

## 2. Diagnóstico Técnico: El Porqué de la Configuración Adoptada

Durante el proceso de despliegue se identificaron cuatro condiciones estructurales en la infraestructura proporcionada:

```
[Internet / Usuario] 
       │
       ▼ (Consulta DNS)
[ns1.hpserverdns.com]  ───(IP: 144.217.224.86)───► [Servidor cPanel Antiguo]
                                                            │ (Proxy Inverso .htaccess)
                                                            ▼
                                                   [Servidor Node.js / Next.js]
                                                   (Puerto 3095 - PM2)
```

1. **Disociación de Servidores DNS (Causa de la no propagación directa):**
   * El dominio institucional `conafovicer.com` tiene sus servidores de nombres autoritativos ante Internet en `ns1.hpserverdns.com` (IP `167.114.206.218`, servidor central del proveedor *HP Servidor*).
   * El acceso facilitado pertenece al servidor VPS `144.217.224.86`. Este servidor no contaba con un clúster de sincronización DNS activo (*DNS Cluster*) conectado con el servidor maestro. Por tal motivo, cualquier registro creado o modificado localmente en su cPanel/WHM no tenía efecto en la red pública de Internet.
2. **Naturaleza de la Aplicación (Node.js vs. Hosting Estático):**
   * Las encuestas de Next.js requieren un entorno de ejecución continuo de servidor (**Node.js daemon**). La cuenta de cPanel asignada para el subdominio no disponía de acceso a Terminal SSH ni del módulo *Setup Node.js App* activo para ese usuario.
3. **Bloqueo de Seguridad en Firewall (Error 503):**
   * El firewall perimetral del servidor cPanel (CSF Firewall) restringía por defecto las peticiones TCP salientes hacia puertos no convencionales (puerto `3095`), impidiendo la comunicación hacia el backend.
4. **Colisión de Enrutamiento por Archivos Residuales (Error 404):**
   * En el directorio raíz `/public_html/navidad2026` permanecía el archivo estático `index.html` de campañas pasadas. La directiva `DirectoryIndex` de Apache forzaba la solicitud hacia `/index.html`, ruta inexistente dentro del enrutador de Next.js (cuya página principal es `/`).

---

## 3. Acciones Técnicas Realizadas (Lo que se hizo)

Para garantizar la disponibilidad inmediata del servicio con su dominio oficial y certificado de seguridad, se ejecutaron las siguientes soluciones:

| Componente | Acción Implementada | Resultado |
| :--- | :--- | :--- |
| **Servicio de Aplicación** | Despliegue de Next.js Standalone administrado por **PM2** en el puerto `3095`. | Alta disponibilidad y reinicio automático del proceso ante fallos. |
| **Firewall (WHM / CSF)** | Inclusión de la IP del servidor de aplicaciones en la lista blanca de CSF (`Quick Allow`). | Habilitación de tráfico bidireccional entre el hosting y la aplicación. |
| **Enrutamiento (cPanel)** | Configuración de **Proxy Inverso en Apache** mediante reglas avanzadas en `.htaccess`. | Navegación bajo `https://navidad2026.conafovicer.com` con SSL válido y sin visibilidad de IPs externas. |
| **Mapeo de Rutas** | Aplicación de `DirectoryIndex disabled` y renombramiento del `index.html` legado. | Entrega limpia de la raíz `/` de Next.js, corrigiendo el error 404. |

---

## 4. Recomendaciones para el Traspaso Final del Código Fuente

El servidor de aplicaciones actual fue facilitado temporalmente para pruebas y validación. Al momento de la entrega formal del paquete de código (`.zip`), el área de TI de CONAFOVICER deberá contemplar los siguientes lineamientos:

### Escenario Recomendado: Despliegue en Servidor Propio (VPS / Cloud)
Para una arquitectura definitiva, limpia e independiente del hosting actual:

1. **Requisitos del Sistema:**
   * Servidor Linux (Ubuntu 22.04 LTS / Debian 12 / Rocky Linux).
   * Node.js v20.x o superior instalado.
   * Gestor de procesos PM2 (`npm install -g pm2`).
2. **Puesta en Marcha:**
   * Descomprimir el código en el directorio deseado (ej. `/var/www/navidad2026`).
   * Iniciar el servicio utilizando el archivo de configuración incluido:
     ```bash
     pm2 start ecosystem.config.js
     pm2 save
     pm2 startup
     ```
3. **Apuntado DNS Definitivo (Sin Proxy Intermedio):**
   * El administrador debe ingresar al portal principal del proveedor de dominio (*HP Servidor*) donde reside la zona autoritativa (`ns1.hpserverdns.com`).
   * Crear o modificar el registro:
     * **Tipo:** `A`
     * **Nombre:** `navidad2026`
     * **Destino:** `[IP del nuevo servidor del cliente]`
     * **TTL:** `300` segundos.
4. **Servidor Web y SSL en Destino:**
   * Configurar Nginx o Apache en el nuevo servidor escuchando en los puertos `80` y `443` con Certbot (Let's Encrypt gratuito) apuntando internamente a `http://localhost:3095`.
5. **Desconexión del Hosting Antiguo:**
   * Una vez propagado el DNS directo, se puede eliminar de manera segura la carpeta `/public_html/navidad2026` y su archivo `.htaccess` del cPanel anterior.

---

## 5. Datos y Parámetros del Entregable de Software

El paquete comprimido entregado contiene los siguientes elementos críticos:

* **`/data/cona_survey.db`**: Base de datos SQLite activa con el histórico de registros recopilados durante la fase actual.
* **`/data/schema_supabase.sql`**: Script DDL listo en caso de que CONAFOVICER opte por migrar la persistencia hacia Supabase / PostgreSQL.
* **`ecosystem.config.js`**: Archivo de arranque para el orquestador PM2.
* **`.env`**: Parámetros de entorno (puerto `3095`, credenciales administrativas del panel `/admin` y llaves de seguridad).
* **`INSTRUCCIONES_HOSTING.txt`**: Manual de procedimientos técnicos de despliegue tanto para entornos VPS/Linux como para plataformas cPanel con soporte Node.js.
