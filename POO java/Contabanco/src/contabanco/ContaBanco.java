package contabanco;

public final class ContaBanco {

    //Atributos.
    public String numConta;
    private String tipo;
    protected String dono;
    protected float saldo;
    protected boolean status;

    //Métodos construtores
    public ContaBanco(String numConta, String tipo, String dono, float saldo, boolean status) {
        this.setNumConta(numConta);
        this.setTipo(tipo);
        this.setDono(dono);
        this.setSaldo(saldo);
        this.setStatus(status);
    }

    public ContaBanco() {
        this.numConta = "Ainda naõ definido";
        this.tipo = "Ainda não definido!";
        this.dono = "Ainda não definido";
        this.saldo = 0;
        this.status = false;
    }

    //Métodos modificadores Setters
    public void setNumConta(String numConta) {
        if (numConta.length() == 8 && numConta.charAt(6) == '-') {
            this.numConta = numConta;
        } else {
            System.out.println("Numero de conta inválido!");
        }
    }

    public void setTipo(String tipo) {
        if (null == tipo) {
            System.out.println("Tipo de conta inválido");
        } else {
            switch (tipo) {
                case "CC":
                    this.tipo = "CC";
                    this.setSaldo(50);
                    break;
                case "CP":
                    this.tipo = "CP";
                    this.setSaldo(150);
                    break;
                default:
                    System.out.println("Tipo de conta inválido");
                    break;
            }
        }
    }

    public void setDono(String dono) {
        if (dono.length() <= 30) {
            this.dono = dono;
        } else {
            System.out.println("Nome inválido!");
        }
    }

    public void setSaldo(float saldo) {
        if (saldo >= 0) {
            this.saldo = saldo;
        } else {
            System.out.println("Saldo negativo");
        }
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    //Métodos acessores getters
    public String getNumConta() {
        return this.numConta;
    }

    public String getTipo() {
        return this.tipo;
    }

    public String getDono() {
        return this.dono;
    }

    public float getSaldo() {
        return this.saldo;
    }

    public boolean isStatus() {
        return this.status;
    }

    //Métodos
    public void abrirConta() {
        this.status = true;
    }

    public void fecharConta() {
        if (this.saldo > 0) {
            System.out.println("Para fechar a conta e necessario"
                    + " sacar todo o dinheiro!");
        } else if (this.saldo < 0) {
            System.out.println("Por favor, Quitar suas dividas antes de fechar"
                    + "a conta!");
        } else {
            this.setStatus(false);
        }
    }

    public void depositar(float x) {
        /*
        if (isStatus()){
            this.saldo += x;
        }
        
         */
        if (isStatus()) {
            setSaldo(getSaldo() + x);
        } else {
            System.out.println("Impossivel depositar, verifique se a"
                    + "conta esta ativa!");
        }
    }

    public void sacar(float x) {
        if (isStatus() && getSaldo() >= x) {
            setSaldo(getSaldo() - x);
        } else {
            System.out.println("Impossivel sacar, verifique o saldo"
                    + "ou se a conta esta aberta");
        }
    }

    public void pagarMensal() {
        if (isStatus()) {
            if ("CC".equals(this.tipo)) {
                setSaldo(getSaldo() - 12);
            } else {
                setSaldo(getSaldo() - 20);
            }
        } else {
            System.out.println("Conta não esta ativa!");
        }
    }

    @Override
    public String toString() {
        return "ContaBanco{" + "\n Numero da Conta: " + this.getNumConta() + "\n Tipo de conta: " + this.getTipo()
                + "\n Dono: " + this.getDono() + "\n Saldo: " + this.getSaldo() + "\n Status: " + this.isStatus();
    }

}
