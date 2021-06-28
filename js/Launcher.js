class Launcher
{
    constructor (bodyA,bodyB){
        var options={
			bodyA : bodyA,
            pointB : bodyB,
            length : 50,
            stiffness : 0.05,	
		}
		this.body=Constraint.create(options);
 		World.add(world,this.body);
	}
	display(){
		var bodyA = this.body.bodyA.position;
		var bodyB = this.body.pointB;
		
		push()
		stroke(0)
		strokeWeight(4)
		line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
		pop();
    }  
	fly(){
		this.body.bodyA=null;
	}                    
}
