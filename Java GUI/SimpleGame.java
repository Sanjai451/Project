// import java.awt.Button;
//import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;
//import java.awt.TextField;
//import java.awt.event.ActionEvent;
//import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;

class SimpleGame extends Frame implements MouseMotionListener {
    //private static final Color Color = null;
    int circleX=200,circleY=200, CircleRadius=2; //pos
    SimpleGame(){
        addMouseMotionListener(this);


        

       
       
        setLayout(null);
        setSize(900,900);
        setTitle("Simple");
         setVisible(true);
    }
    public void paint(Graphics g){ //for circle
        super.paint(g);
        g.setColor(java.awt.Color.BLUE);
        g.fillOval(circleX, circleY, 20*CircleRadius, 20*CircleRadius);
    }
    @Override
    public void mouseDragged(MouseEvent e) {
        // TODO Auto-generated method stub
       // throw new UnsupportedOperationException("Unimplemented method 'mouseDragged'");
    }

    @Override
    public void mouseMoved(MouseEvent e) {
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'mouseMoved'");
        int x=e.getX();
        int y=e.getY(); //get mouse position
        if(x<circleX+CircleRadius){
            circleX++;
        }
        if (x> circleX+CircleRadius) {
            circleX--;
            
        }
         if(y<circleY+CircleRadius){
            circleY++;
        }
        if (y> circleY+CircleRadius) {
            circleY--;}

        repaint();
    
    }
    


    
    public static void main(String[] args) {
        new SimpleGame();
    }
}





































    

     


   