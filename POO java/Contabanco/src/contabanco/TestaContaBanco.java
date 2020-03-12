package contabanco;

import javax.swing.JOptionPane;

public class TestaContaBanco {

    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta("151157-7");
        p1.setDono("Jubileu");
        p1.abrirConta();
        p1.setTipo("CC");
        p1.depositar(300);
        
        ContaBanco p2 = new ContaBanco();
        p2.setNumConta("158789-7");
        p2.setDono("Creuza");
        p2.setStatus(true);
        p2.setTipo("CP");
        p2.setSaldo(100);
        
        p1.depositar(500);
        p2.depositar(1000);
        
        p1.sacar(2000);
        p2.sacar(950);
        
        p1
       
        JOptionPane.showMessageDialog(null, p1.toString());
        JOptionPane.showMessageDialog(null, p2.toString());
    }
    
}
