const _0x19b81b = _0x5808; function _0x4532() { const _0x187f57 = ['p_HG7rE/ex', '126560kXbLMf', '34354RxDxFQ', '996CrbtyD', 'ript.googl', '6280uOTODA', '2182947swLoqF', 'k59u9tN3zY', 'e.com/macr', '12124935scJwGE', 'fvkttKER3k', '8TjMMds', 'oMYyjypdng', 'https://sc', 'DZbu-Ove0F', 'cdIl3kyd9B', 'os/s/AKfyc', '4396931BrGPXI', 'bzISKbd4ZL', '5186568RBcBvm']; _0x4532 = function () { return _0x187f57; }; return _0x4532(); } function _0x5808(_0x10d00a, _0x5147e5) { const _0x394dc8 = _0x4532(); return _0x5808 = function (_0x30f775, _0x320af6) { _0x30f775 = _0x30f775 - (0xa2a * -0x1 + -0xa * -0x1d8 + 0x793 * -0x1); let _0x149dae = _0x394dc8[_0x30f775]; return _0x149dae; }, _0x5808(_0x10d00a, _0x5147e5); } (function (_0x1bccbf, _0x29fa7a) { const _0x2c1b49 = _0x5808, _0x2a4502 = _0x1bccbf(); while (!![]) { try { const _0x137bf4 = parseInt(_0x2c1b49(0xbf)) / (0x95d + 0x60 + -0x9bc) + parseInt(_0x2c1b49(0xbe)) / (0x1f * 0x9b + 0x2ac + -0x156f) + -parseInt(_0x2c1b49(0xc3)) / (-0x7bd + -0x1b1b + 0x22db) + -parseInt(_0x2c1b49(0xc0)) / (0x1836 + 0x2058 + -0x388a) * (parseInt(_0x2c1b49(0xc2)) / (0x11c2 + -0x1e89 + 0x3 * 0x444)) + parseInt(_0x2c1b49(0xbc)) / (0x19e7 + -0x2531 * -0x1 + -0x4da * 0xd) + -parseInt(_0x2c1b49(0xba)) / (0x13b8 + 0x170 * -0x4 + -0xdf1) * (parseInt(_0x2c1b49(0xb4)) / (0x753 * 0x5 + 0x1 * -0x49d + -0x1ffa)) + parseInt(_0x2c1b49(0xc6)) / (-0x1dd + -0x1 * -0x1c65 + -0x1a7f); if (_0x137bf4 === _0x29fa7a) break; else _0x2a4502['push'](_0x2a4502['shift']()); } catch (_0x310668) { _0x2a4502['push'](_0x2a4502['shift']()); } } }(_0x4532, -0x145 * -0x1af + 0x7e7 * -0x20a + -0x2 * -0xbe065)); const scriptURL = _0x19b81b(0xb6) + _0x19b81b(0xc1) + _0x19b81b(0xc5) + _0x19b81b(0xb9) + _0x19b81b(0xbb) + _0x19b81b(0xb8) + _0x19b81b(0xb7) + _0x19b81b(0xc4) + _0x19b81b(0xb5) + _0x19b81b(0xb3) + _0x19b81b(0xbd) + 'ec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit-button").textContent = "Please wait...";
    document.getElementById("submit-button").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit-button").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name-field").value = "";
                document.getElementById("email-field").value = "";
                document.getElementById("message-field").value = "";
                document.getElementById("submit-button").textContent = "Send";
                document.getElementById("submit-button").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("submit-button").textContent = "Please Try Again😘"
            document.getElementById("submit-button").disabled = false;
        });
});
