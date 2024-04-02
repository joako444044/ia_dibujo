quick_draw_data_set = ["rain","smiley_face","line","snowman","map","remote_control","hurricane","cactus","hat","nose"];
text = ["lluvia","cara felis","linea","hombre de nieve","mapa","control remoto","huracan","cactus","sombrero","naris"];
time_counter = 0;
time_check = "";
draw_sketch = "";
answer_holder = "";                                                        
points = 0;
loses = 0;
lives = 20;

document.getElementById("hv").innerHTML = "vidas: " + lives;
random_n = Math.floor(Math.random() * 10);
console.log(quick_draw_data_set[random_n]);

dibujo = quick_draw_data_set[random_n];
nom_dibujo = text[random_n];
document.getElementById("instruccion").innerHTML = "dibujo a trasar: " + dibujo;

function preload()
{
clasifier = ml5.imageClassifier("DoodleNet");

}
function setup()
{
    canvas = createCanvas(300 ,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function draw()
{
check_sketch();
strokeWeight(8);
stroke(0);

if (mouseIsPressed)
{
    line(pmouseX,pmouseY,mouseX,mouseY);
    
}
if (draw_sketch == dibujo)
{
    answer_holder = "set";
   
    
   

    points = points + 1;
    document.getElementById("p").innerHTML = "puntos: " + points;
   time_counter = 500;




}
}

function classifyCanvas()
{
    clasifier.classify(canvas , gotResults);
}

function gotResults(error ,results)
{
    if (error)
    {
console.error(error);
    }else
    {
        console.log(results);
        draw_sketch = results[0].label;
        console.log( draw_sketch);
        document.getElementById("etiketa").innerHTML ="nombre de tu dibujo: " + draw_sketch;
        document.getElementById("confiansa").innerHTML ="porcentje de parecido: " + Math.floor(results[0].confidence * 100) + "%";
        
    }
}

function claen()
{
    background("white");
}

function check_sketch()
{
time_counter++

document.getElementById("t").innerHTML = "tiempo: " + time_counter;
if(time_counter > 500)
{
    time_counter = 0;
    time_check = "completed";
    if(time_check == "completed" || answer_holder == "set")
    {
       
       
        claen();
        random_n = Math.floor(Math.random() * 10);
console.log(quick_draw_data_set[random_n]);

dibujo = quick_draw_data_set[random_n];
nom_dibujo = text[random_n]
document.getElementById("instruccion").innerHTML = "dibujo a trasar:" + dibujo;

if (answer_holder == "")
{
    time_check = "";
answer_holder = "";
loses = loses + 1;
lives = lives - loses;
document.getElementById("hv").innerHTML = "vidas: " + lives;
lives = 20;
if (loses > 20)
{
    loses = 0;
    window.location = "index2.html";
}
}

time_check = "";
answer_holder = "";

            }
        }
    }

 










