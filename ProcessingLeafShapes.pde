PImage img;
PImage img1;
PImage img2;

void setup()
{
  size(128, 128);
  img = loadImage("acicular.png");
  img1 = loadImage("oblong.png");
  img2 = loadImage("deltoid.png");
}

void draw()
{
  
  for (int i=0;i<3;i++)
  {
    background(255);
    
    pushMatrix();
    strokeWeight(4);
    float r = random(60, 100);
    float x = random(width-r);
    float y = random(width-r);
  
    stroke(random(100), random(100), random(100));
    translate(x,y);
    if(i==0)
    {
      rectMode(CENTER);
      rotate(random(-0.1,0.1));
      image(img,0,0,r,r);
      saveFrame("data1/acicular####.png");
    }
    else if(i==1)
    {
      rectMode(CENTER);
      rotate(random(-0.1,0.1));
      image(img1,0,0,r,r);
      saveFrame("data1/oblong####.png");
    }
    else if(i==2)
    {
      rectMode(CENTER);
      rotate(random(-0.1,0.1));
      image(img2,0,0,r,r);
      saveFrame("data1/deltoid####.png");
    }
    popMatrix();
  }
  
  if(frameCount==100)
  {
    exit();
  }

}
