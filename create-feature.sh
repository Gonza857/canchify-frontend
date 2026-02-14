#!/bin/bash

# Verificar si se pasó un nombre de feature
if [ -z "$1" ]; then
  echo " Error: Debes proporcionar un nombre para la feature."
  echo " Uso: ./create-feature.sh nombre-feature"
  exit 1
fi

FEATURE_NAME=$1
BASE_DIR="src/features/$FEATURE_NAME"

# Crear la estructura de carpetas
echo " Creando feature: $FEATURE_NAME en $BASE_DIR..."

mkdir -p "$BASE_DIR/components"
mkdir -p "$BASE_DIR/hooks"
mkdir -p "$BASE_DIR/services"
mkdir -p "$BASE_DIR/mappers"
mkdir -p "$BASE_DIR/types"

# Crear archivos iniciales básicos
touch "$BASE_DIR/index.ts"
touch "$BASE_DIR/services/${FEATURE_NAME}.service.ts"
touch "$BASE_DIR/mappers/${FEATURE_NAME}.mapper.ts"
touch "$BASE_DIR/types/index.ts"

# Agregar un export básico al index.ts
echo "// Public API for $FEATURE_NAME feature" > "$BASE_DIR/index.ts"
echo "export * from './services/${FEATURE_NAME}.service';" >> "$BASE_DIR/index.ts"
echo "export * from './types';" >> "$BASE_DIR/index.ts"

echo " ¡Feature '$FEATURE_NAME' creada con éxito!"