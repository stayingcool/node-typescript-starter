output_path=$(pwd)/dist
rm -rf $output_path
tsc -outDir $output_path
mkdir -p "$output_path/src/config"
cp src/config/.env "$output_path/src/config"