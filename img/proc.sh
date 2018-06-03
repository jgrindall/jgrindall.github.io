
ffmpeg -i "./pm/pm3.png" -y -vf "scale=976:683:force_original_aspect_ratio=decrease,pad=976:683:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" "./pm/pm3.png"
ffmpeg -i "./pm/pm4.png" -y -vf "scale=976:683:force_original_aspect_ratio=decrease,pad=976:683:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" "./pm/pm4.png"
ffmpeg -i "./pm/pm6.png" -y -vf "scale=976:683:force_original_aspect_ratio=decrease,pad=976:683:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" "./pm/pm6.png"
ffmpeg -i "./pm/pm7.png" -y -vf "scale=976:683:force_original_aspect_ratio=decrease,pad=976:683:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" "./pm/pm7.png"
ffmpeg -i "./pm/pm8.png" -y -vf "scale=976:683:force_original_aspect_ratio=decrease,pad=976:683:(ow-iw)/2:(oh-ih)/2:#FFFFFF@1" "./pm/pm8.png"
