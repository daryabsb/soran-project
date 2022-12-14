import win32ui
import win32con
import win32print

myprinter_name = "POSSTORE PS-7"
# get the name from your Printers folder

printer_properties=[]

def save():
    pHandle = win32print.OpenPrinter(myprinter_name)
    properties = win32print.GetPrinter(pHandle, 2)
    pDevModeObj = properties["pDevMode"]
    printer_properties.append(pDevModeObj.FormName)
    printer_properties.append(pDevModeObj.PaperSize)
    printer_properties.append(pDevModeObj.Orientation)
    printer_properties.append(pDevModeObj.Color)
    printer_properties.append(pDevModeObj.Copies)
    printer_properties.append(pDevModeObj.DefaultSource)
    win32print.ClosePrinter(pHandle)

def apply():
    hprinter = win32print.OpenPrinter(myprinter_name)

    devmode = win32print.GetPrinter(hprinter, 2)["pDevMode"]
    devmode.FormName=printer_properties[0]
    devmode.PaperSize=printer_properties[1]
    devmode.Orientation=printer_properties[2]
    devmode.Color=printer_properties[3]
    devmode.Copies=printer_properties[4]
    devmode.DefaultSource=printer_properties[5]

    hdc = win32ui.CreateDC("WinPrint",myprinter_name,devmode)
    dc = win32ui.CreateDCFromHandle(hdc)

    dc.StartDoc('My Python Document')
    dc.StartPage()
    dc.EndPage()
    dc.EndDoc()
    del dc
