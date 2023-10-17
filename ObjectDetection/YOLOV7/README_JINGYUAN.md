To do object detection with YOLOV7:
1. activate virtual environment: conda activate YOLOV7
2. go to the path: cd DIP/object_detection/yolov7/
3. for the photo or video u want to use, add them under the file test_photos
4. run the command: python detect.py --weights weights/yolov7.pt --source test_photos/ur photo or video
or
python detect.py --weights runs/train/yolov78/weights/best.pt --source test_photos/video2.mp4
The path for YOLOV7 trained with DNA dataset: /media/ntu/volume1/home/s123md302_01/DIP/object_detection/yolov7/runs/train/yolov78/weights/best.pt

5. the image with the result is saved in: runs/detect/exp(n)

Command to train latest Dataset Yi Ming gave me
1. (YOLOV7) s123md302_01@dl3090-02:~/DIP/object_detection/yolov7$ python train.py --workers 8 --device 0 --batch-size 32 --data data/data.yaml --img 640 640 --cfg cfg/training/yolov7.yaml --epochs 50 --weights '' --name yolov7 --hyp data/hyp.scratch.p5.yaml
YOLOR 🚀 v0.1-126-g84932d7 torch 2.0.1+cu117 CUDA:0 (NVIDIA GeForce RTX 3090, 24268.3125MB)
2. do a comparison command provided in YOLOV7 used to train Single GPU
Ctrl F to find arguments in the code, so that I can find the default no. of epochs value to be edited
