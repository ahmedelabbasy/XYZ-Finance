export interface ThemeType {
  primary: string;
  placeholderText: string;
  error: string;
  inputBorder: string;
  modalBackground: string;
  modalCardBackground: string;
  shadow: string;
  notActiveOptionBackground: string;
  activeOptionTxt: string;
  buttonTxt: string;
  text: string;
  transactionItemBackground: string;
  transactionItemDescription: string;
  pieChartBackground: string;
  background: string;
  splashBackground: string;
  splashImageBackground: string;
  clear: string;
}

const defaultTheme = {
  placeholderText: "#AAAAAA",
  inputBorder: "#CCCCCC",
  modalCardBackground: "#FFFFFF",
  shadow: "#000000",
  notActiveOptionBackground: "#F0F0F0",
  activeOptionTxt: "#FFFFFF",
  buttonTxt: "#FFFFFF",
  pieChartBackground: "#F9F9F9",
  clear: "rgba(9, 18, 114, 0.5)",
};

export const lightTheme: ThemeType = {
  ...defaultTheme,
  primary: "#091172",
  error: "#990000",
  background: "#FFFFFF",
  transactionItemBackground: "#F9F9F9",
  transactionItemDescription: "#555555",
  modalCardBackground: "#FFFFFF",
  modalBackground: "rgba(0, 0, 0, 0.5)",
  text: "#000000",
  splashBackground: "#FFFFFF",
  splashImageBackground: "#091172",
};

export const darkTheme: ThemeType = {
  ...defaultTheme,
  primary: "#F9F9F9",
  error: "#ff0000",
  background: "#04072F",
  transactionItemBackground: "#091172",
  transactionItemDescription: "#B3B3B3",
  modalCardBackground: "#04072F",
  modalBackground: "rgba(170, 170, 170, 0.5)",
  text: "#FFFFFF",
  splashBackground: "#04072F",
  splashImageBackground: "#F9F9F9",
};
