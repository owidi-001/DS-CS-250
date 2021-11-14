#ifndef _FUNCTIONS_HPP
#define _FUNCTIONS_HPP

#include <iostream>
#include <string>
#include <fstream>
#include <iomanip>
using namespace std;

template < typename T >
void DisplayColumn( T col, int colWidth = 20 )
{
    cout << left << setw( colWidth ) << col;
}

void Output( ofstream& output )
{
    output << endl;
}

void Output( ofstream& output, string label )
{
    output << left << setw( 20 ) << label << endl;
}

template < typename T >
void Output( ofstream& output, string label, T data )
{
    output << left << setw( 20 ) << label << data << endl;
}

#endif
