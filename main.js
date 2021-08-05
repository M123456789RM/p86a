var canvas = new fabric.Canvas('myCanvas');

var blockH = 30;

var blockW = 30;

var playerX = 10;

var playerY = 10;

var playerobject = '';

var blockobject = '';

function player_update()
{
    fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function(Img) {
        player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140)
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });

}

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:player_y,
left:player_x
});
canvas.add(block_image_object);

});


}