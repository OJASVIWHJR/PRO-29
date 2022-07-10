class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
  var option={
      restitution :0.4
      friction :0.0
      isStatic : true
  }