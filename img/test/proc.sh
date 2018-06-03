
ffmpeg -i slide7.png -y -vf "scale=646:452:force_original_aspect_ratio=decrease,pad=646:452:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" slide7.png
