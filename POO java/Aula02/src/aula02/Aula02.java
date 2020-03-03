
package aula02;

public class Aula02 {

    
    public static void main(String[] args) {
       Caneta c1 = new Caneta ();
       c1.modelo = "Bic Ponta fina";
       c1.cor = "Azul";
       c1.ponta = 0.5f;
       c1.carga = 90;
       c1.tampar ();
       c1.status();
       c1.rabiscar();
       
       Caneta c2 = new Caneta ();
       c2.modelo = "Caneta do governo";
       c2.cor = "Preta";
       c2.tampada = false;
       c2.status();
       c2.rabiscar();
       
       
    }
    
}
