import java.util.ArrayList;
import java.util.Scanner;

public class OrdemDeServico {

    static int contadorOS = 1;
    static ArrayList<String[]> ordens = new ArrayList<>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao;

        System.out.println("══════════════════════════════════");
        System.out.println("     SISTEMA DE ORDEM DE SERVIÇO  ");
        System.out.println("         Assistência Técnica      ");
        System.out.println("══════════════════════════════════");

        do {
            System.out.println("\n===== MENU PRINCIPAL =====");
            System.out.println("1 - Nova Ordem de Serviço");
            System.out.println("2 - Listar Ordens Abertas");
            System.out.println("3 - Atualizar Status");
            System.out.println("4 - Listar Todas as Ordens");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = sc.nextInt();

            switch (opcao) {
                case 1:
                    novaOrdem(sc);
                    break;
                case 2:
                    listarAbertas();
                    break;
                case 3:
                    atualizarStatus(sc);
                    break;
                case 4:
                    listarTodas();
                    break;
                case 0:
                    System.out.println("\nSistema encerrado. Até logo!");
                    break;
                default:
                    System.out.println("Opção inválida! Tente novamente.");
            }

        } while (opcao != 0);

        sc.close();
    }

    // ===================== NOVA ORDEM =====================
    static void novaOrdem(Scanner sc) {
        System.out.println("\n--- Nova Ordem de Serviço ---");
        sc.nextLine();

        System.out.print("Nome do cliente: ");
        String nome = sc.nextLine();

        System.out.print("Telefone: ");
        String telefone = sc.nextLine();

        System.out.print("Aparelho: ");
        String aparelho = sc.nextLine();

        System.out.print("Problema relatado: ");
        String problema = sc.nextLine();

        System.out.print("Valor do serviço (R$): ");
        String valor = sc.nextLine();

        // [numeroOS, nome, telefone, aparelho, problema, status, valor]
        String[] os = {
            String.valueOf(contadorOS),
            nome, telefone, aparelho, problema,
            "Aguardando", valor
        };

        ordens.add(os);
        System.out.println("\n✓ Ordem de Serviço Nº " + contadorOS + " criada com sucesso!");
        contadorOS++;
    }

    // ===================== LISTAR ABERTAS =====================
    static void listarAbertas() {
        System.out.println("\n--- Ordens em Aberto ---");
        boolean encontrou = false;

        for (String[] os : ordens) {
            if (!os[5].equals("Concluído")) {
                exibirOS(os);
                encontrou = true;
            }
        }

        if (!encontrou) {
            System.out.println("Nenhuma ordem em aberto no momento.");
        }
    }

    // ===================== ATUALIZAR STATUS =====================
    static void atualizarStatus(Scanner sc) {
        if (ordens.isEmpty()) {
            System.out.println("\nNenhuma ordem cadastrada ainda.");
            return;
        }

        listarTodas();
        System.out.print("\nDigite o número da OS: ");
        int numero = sc.nextInt();

        String[] osEncontrada = null;
        for (String[] os : ordens) {
            if (Integer.parseInt(os[0]) == numero) {
                osEncontrada = os;
                break;
            }
        }

        if (osEncontrada == null) {
            System.out.println("OS não encontrada!");
            return;
        }

        System.out.println("\nStatus atual: " + osEncontrada[5]);
        System.out.println("Novo status:");
        System.out.println("1 - Aguardando");
        System.out.println("2 - Em andamento");
        System.out.println("3 - Concluído");
        System.out.print("Escolha: ");
        int status = sc.nextInt();

        switch (status) {
            case 1: osEncontrada[5] = "Aguardando"; break;
            case 2: osEncontrada[5] = "Em andamento"; break;
            case 3: osEncontrada[5] = "Concluído"; break;
            default: System.out.println("Opção inválida!"); return;
        }

        System.out.println("✓ Status atualizado para: " + osEncontrada[5]);
    }

    // ===================== LISTAR TODAS =====================
    static void listarTodas() {
        System.out.println("\n--- Todas as Ordens de Serviço ---");
        if (ordens.isEmpty()) {
            System.out.println("Nenhuma ordem cadastrada.");
            return;
        }
        for (String[] os : ordens) {
            exibirOS(os);
        }
    }

    // ===================== EXIBIR OS =====================
    static void exibirOS(String[] os) {
        System.out.println("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        System.out.println("🔧 OS Nº     : " + os[0]);
        System.out.println("👤 Cliente   : " + os[1]);
        System.out.println("📞 Telefone  : " + os[2]);
        System.out.println("📱 Aparelho  : " + os[3]);
        System.out.println("❗ Problema  : " + os[4]);
        System.out.println("📋 Status    : " + os[5]);
        System.out.println("💰 Valor     : R$ " + os[6]);
        System.out.println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    }
}