import java.awt.event.*;
import javax.swing.*;

class CFG {

    public static void main(String args[]) {
        converter();
    }

    public static void converter() {
        JFrame f = new JFrame("Currency Converter");

        JLabel l1, l2;
        JTextField t1, t2;
        JButton b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11;

        l1 = new JLabel("From:");
        l1.setBounds(20, 40, 60, 30);
        l2 = new JLabel("To:");
        l2.setBounds(170, 40, 60, 30);

        t1 = new JTextField("0");
        t1.setBounds(80, 40, 50, 30);
        t2 = new JTextField("0");
        t2.setBounds(240, 40, 50, 30);

        b1 = new JButton("USD to IND");
        b1.setBounds(30, 80, 120, 20);
        b2 = new JButton("INR to USD");
        b2.setBounds(180, 80, 120, 20);
        b3 = new JButton("EUR to INR");
        b3.setBounds(30, 120, 120, 20);
        b4 = new JButton("INR to EUR");
        b4.setBounds(180, 120, 120, 20);
        b5 = new JButton("GBPto INR");
        b5.setBounds(30, 160, 120, 20);
        b6 = new JButton("INR to GBP");
        b6.setBounds(180, 160, 120, 20);
        b7 = new JButton("JPY to INR");
        b7.setBounds(30, 200, 120, 20);
        b8 = new JButton("INR to JPY");
        b8.setBounds(180, 200, 120, 20);
        b9 = new JButton("CAD to INR");
        b9.setBounds(30, 240, 120, 20);
        b10 = new JButton("INR to CAD");
        b10.setBounds(180, 240, 120, 20);
        b11 = new JButton("Close");
        b11.setBounds(150, 280, 100, 30);

        b1.addActionListener(getConversionActionListener(80.25, t1, t2));
        b2.addActionListener(getConversionActionListener(1/65.25, t2, t1));
        b3.addActionListener(getConversionActionListener(88.76, t1, t2));
        b4.addActionListener(getConversionActionListener(1/88.76, t2, t1));
        b5.addActionListener(getConversionActionListener(100.50, t1, t2));
        b6.addActionListener(getConversionActionListener(1/100.50, t2, t1));
        b7.addActionListener(getConversionActionListener(0.71, t1, t2));
        b8.addActionListener(getConversionActionListener(1/0.71, t2, t1));
        b9.addActionListener(getConversionActionListener(55.42, t1, t2));
        b10.addActionListener(getConversionActionListener(1/55.42, t2, t1));

        b11.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                f.dispose();
            }
        });

        f.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });

        f.add(l1);
        f.add(t1);
        f.add(l2);
        f.add(t2);
        f.add(b1);
        f.add(b2);
        f.add(b3);
        f.add(b4);
        f.add(b5);
        f.add(b6);
        f.add(b7);
        f.add(b8);
        f.add(b9);
        f.add(b10);
        f.add(b11);

        f.setLayout(null);
        f.setSize(400, 350);
        f.setVisible(true);
    }

    private static ActionListener getConversionActionListener(double rate, JTextField from, JTextField to) {
        return new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    double amount = Double.parseDouble(from.getText());
                    double result = amount * rate;
                    to.setText(String.format("%.2f", result));
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(null, "Invalid input. Please enter a valid number.");
                }
            }
        };
    }
}
