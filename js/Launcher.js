
class Launcher
{
    constructor (bodyA,bodyB){
        var options={
	    bodyA : bodyA,
            pointB : bodyB,
            length : 5,
            stiffness : 0.1,	
		}
		this.body=Constraint.create(options);
 		World.add(world,this.body);
	}
	display(){
		if(this.body.bodyA)
		{var bodyA = this.body.bodyA.position;
			var bodyB = this.body.pointB;
			
			push()
			stroke(0)
			strokeWeight(2)
			line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
			pop();}
		
    }  
	fly(){
		this.body.bodyA=null;
	}
	attach(body){
		this.body.bodyA=body
	}
}
