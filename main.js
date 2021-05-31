canvas=new fabric.canvas("myCanvas");
playerX=10;
playerY=10;
playerimg="";
function playerUpdate(){
    fabric.image.fromURL("player.png",function(img)
    {
        playerimg=img;
        playerimg.scaleToWidth(100);
        playerimg.scaleToHeight(140);
        playerimg.set({
            top:playerY,
            left:playerX 
        })
        canvas.add(playerimg);
    });
}
blocks="";
blockW=30;
blockH=30;
function newImage(blockimg){
    fabric.image.fromURL(blockimg,function(img)
    {
      blocks=img;
      blocks.scaleToWidth(blockW);
      blocks.scaleToHeight(blockH);
      blocks.set({
            top:playerY,
            left:playerX 
        })
        canvas.add(playerimg);
    });
}