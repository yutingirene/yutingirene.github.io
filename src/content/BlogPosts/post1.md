
---
title: "whisperAI video to textgrid(word)-mac version"
date: "2026-01-08"
tags: ["whisperAI", "python"]
excerpt: "From video to audio, and then to the forced-alignmed textgrid files"
---



### 


## 

# 0. install

```powershell
# download brew, and python
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install python
brew install ffmpeg

#check your version of python and ffmpeg
python3 --version
# 
pip3 install -U openai-whisper
# check if it is installed
whisper --help

```

# 1. run whisper to detect the words

```powershell
whisper /Users/yuting/Desktop/demo/testvideo.mp3

# you need to choose the lanuage, model size, and output location
# not really work here, try the whisperx
whisper /Users/yuting/Desktop/demo/testvideo.mp3 \
  --language de \
  --model small \
  --output_dir /Users/yuting/Desktop/demo/whisper_out
  

```

now you already have the txt files and other stuff.

later, we need to do it to get the forced-aligned files.

make sure you have wav files instead of mp3 files bc they are not good for whisper

then you can whether use whisperai or MFA to do that

# 2. forced-aligned

```powershell
# always check the version in the beginning
ffmpeg -version
python3 --version
pip3 --version

# install whisperX
pip3 install -U whisperx

#check the version again
whisperx --help
# the forced-aligned
#pip install transcribe-align-textgri

# run the whisperx
whisperx "/Users/yuting/Desktop/Yuting's Ph.D. Project/Exp2/2. data/wav/PSI2_E_051_ch1.wav" \
  --language en \
  --model small \
  --align_model WAV2VEC2_ASR_LARGE_LV60K_960H \
  --output_dir "/Users/yuting/Desktop/Yuting's Ph.D. Project/Exp2/2. data/wav/whisper_out"
```

```powershell

# then get the textgrid file
python -m transcribe_align_textgrid "/Users/yuting/Desktop/Yuting's Ph.D. Project/Exp2/2. data/wav/PSI2_E_050_ch1.wav" --language english

```

Here is the output

so you will get the world-level aligned textgrid files

# 3. To get the phoneme-level

you can whether use MFA or other tools
