pnix({'pattern': _0x68a31a(0x182), 'fromMe': !![], 'desc': _0x25ed89(0x1ed), 'type': _0x25ed89(0x20e)}, async (_0x132826, _0x4476c9) => {
    const _0x493e6b = _0x5020, _0x49a6bf = _0x68a31a, _0x592c02 = _0x44c561, _0x42dcb0 = _0x25ed89;
    if (!_0x132826[_0x42dcb0(0x1f6)]) return await _0x132826[_0x42dcb0(0x200)](_0x592c02(0xd5));
    _0x4476c9 = _0x4476c9 || _0x132826[_0x42dcb0(0x1f5)][_0x42dcb0(0xd2)];
    if (!_0x4476c9) return await _0x132826[_0x42dcb0(0x200)](_0x42dcb0(0x1d6));
    const _0x42a615 = await isAdmin(_0x132826[_0x49a6bf(0xd2)], _0x132826[_0x42dcb0(0x1cc)], _0x132826[_0x42dcb0(0x1d8)]);
    if (!_0x42a615) return await _0x132826[_0x42dcb0(0x200)](_0x42dcb0(0x20d));
    const _0x4ff4df = parsedJid(_0x4476c9);
    const _0x45fe8e = await _0x132826[_0x42dcb0(0x1d8)][_0x493e6b(0x1fd)](_0x132826[_0x42dcb0(0xd2)], _0x4ff4df);
    let _0x1b412e = '';
    _0x45fe8e['map'](_0x596ba4 => {
        if (_0x596ba4[_0x42dcb0(0xc8)]) {
            _0x1b412e += ' @' + _0x596ba4[_0x42dcb0(0xb8)][0x0][_0x42dcb0(0x1e8)]('@')[0x0];
        }
    });
    if (_0x1b412e === '') return await _0x132826[_0x42dcb0(0x200)]('No members found in the group.');
    return await _0x132826[_0x42dcb0(0x200)](_0x1b412e, { 'mentions': _0x45fe8e });
})
