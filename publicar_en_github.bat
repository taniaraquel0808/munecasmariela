@echo off
echo Iniciando proceso de publicacion en GitHub...
echo.

:: Verificar si git esta instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Git no se encuentra en el sistema o no esta en el PATH.
    echo Por favor instala Git o ejecutalo desde 'Git Bash'.
    pause
    exit /b
)

:: Agregar cambios
echo Agregando archivos...
git add .

:: Commit
echo Guardando cambios...
git commit -m "Actualizacion web: Banner, Carrusel, Testimonios y Footer"

:: Configurar rama y remoto
echo Configurando repositorio remoto...
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/taniaraquel0808/munecasmariela

:: Publicar
echo Subiendo a GitHub...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo Publicacion exitosa!
) else (
    echo Hubo un error al subir los archivos. Verifica tu conexion o permisos.
)
pause
