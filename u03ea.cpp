#include "functions.hpp"
#include "classes.hpp"

#include <iostream>
#include <string>
#include <fstream>
#include <iomanip>

using namespace std;

int main()
{
  DisplayColumn("NAME");
  DisplayColumn("PRICE");
  cout << endl;

  Storage<string> productNames;
  Storage<float> productPrices;

  productNames.Add("Sketchbook");
  productPrices.Add(5.59);
  productNames.Add("Pen");
  productPrices.Add(3.59);
  productNames.Add("Pencil");
  productPrices.Add(1.99);


  for (int i = 0; i < productNames.Size(); i++)
  {
    DisplayColumn(productNames.Get(i));
    DisplayColumn(productPrices.Get(i));
    cout << endl;
  }

  ofstream outfile("Items.txt");
  // Output(outfile);

  outfile << "First Product" << endl;
  Output(outfile,"Name",productNames.Get(0));
  Output(outfile,"Price",productPrices.Get(0));
  outfile << endl;
  outfile << endl;

  outfile << "Second Product" << endl;
  Output(outfile,"Name",productNames.Get(1));
  Output(outfile,"Price",productPrices.Get(1));
}
