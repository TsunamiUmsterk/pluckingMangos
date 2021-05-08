class Launcher{
    constructor(bodyA, point){
        var options = {
            bodyA: launcherObject,
            pointB: point,
            stiffness: 0.1,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
        console.log(this.slingShot)
    }

    fly()
    {
        this.launcher.bodyA=null;
    }

    display(){
        if(this.slingShot.bodyA) {
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
} 