@echo off
setlocal enabledelayedexpansion

:: Extract the component name and convert to camelCase for the function name
set "FileName=%1"
set "FunctionName="
set "CapitalizeNextChar=0"

:: Loop through each character in FileName
for /l %%i in (0,1,255) do (
    set "char=!FileName:~%%i,1!"
    if "!char!" equ "" goto createFiles
    if "!char!" neq "-" (
        if !CapitalizeNextChar! equ 1 (
            set "char=!char:~0,1!"
            for %%c in (a b c d e f g h i j k l m n o p q r s t u v w x y z) do (
                set "char=!char:%%c=%%c^!"
            )
            set "FunctionName=!FunctionName!!char!"
            set "CapitalizeNextChar=0"
        ) else (
            set "FunctionName=!FunctionName!!char!"
        )
    ) else (
        set "CapitalizeNextChar=1"
    )
)

:createFiles
:: Ensure the first character is lowercase
set "FirstChar=!FunctionName:~0,1!"
for %%c in (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    set "FirstChar=!FirstChar:%%c=%%c^!"
)
set "FunctionName=!FirstChar!!FunctionName:~1!"

:: Create folder
set "ComponentDir=src\%FileName%"
if not exist "%ComponentDir%" mkdir "%ComponentDir%"

:: Create JSX and CSS files
echo import "./%FileName%.css";> "%ComponentDir%\%FileName%.jsx"
echo.>> "%ComponentDir%\%FileName%.jsx"
echo function %FunctionName%() {>> "%ComponentDir%\%FileName%.jsx"
echo   return ^(>> "%ComponentDir%\%FileName%.jsx"
echo     ^<^> >> "%ComponentDir%\%FileName%.jsx"
echo     ^</^> >> "%ComponentDir%\%FileName%.jsx"
echo   ^);>> "%ComponentDir%\%FileName%.jsx"
echo }>> "%ComponentDir%\%FileName%.jsx"
echo.>> "%ComponentDir%\%FileName%.jsx"
echo export default %FunctionName%;>> "%ComponentDir%\%FileName%.jsx"
echo /* Style for %FunctionName% component */> "%ComponentDir%\%FileName%.css"

echo Component %FunctionName% created in %ComponentDir%

endlocal
