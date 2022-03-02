function main() {

    function regexpCheck([s, p]) {
        // if regexp is empty but str is full it's a FALSE
        if (!p) {
            return !s;
        }

        const anyCount = p[1] === '*';
        const anyChar = p[0] === '.';
        const isSame = s[0] === p[0] || anyChar;

        // if str is empty(isSame) it's also FALSE except one case of anyCount regexp
        if(!s){
            return anyCount ? regexpCheck([s, p.substr(2)]) : false;
        }

        return anyCount
            ? regexpCheck([s, p.substr(2)])
            || isSame && (
                regexpCheck([s.substr(1), p])
                || regexpCheck([s.substr(1), p.substr(2)])
            )
            :  isSame && regexpCheck([s.substr(1), p.substr(1)]);

    }

    function solution(props) {
        return regexpCheck(props) ? 'TRUE' : 'FALSE';
    }

    const testValue = helper.getTestValue(["Hellolo", "He.*lo"]);
    helper(() => solution(testValue), 'Custom value');

    helper(() => solution(['Hello', 'Hello']), `Must be TRUE`);
    helper(() => solution(['Hello', 'Hel.o']), `Must be TRUE`);
    helper(() => solution(['Hello', '.....']), `Must be TRUE`);
    helper(() => solution(['Hello', 'Helllo']), `Must be FALSE`);
    helper(() => solution(['Hello', 'He.o']), `Must be FALSE`);
    helper(() => solution(['Hello', 'Hell']), `Must be FALSE`);
    helper(() => solution(['Hellolo', 'Hel*olo']), `Must be TRUE`);
    helper(() => solution(['Hellolo', 'Hell*olo']), `Must be TRUE`);
    helper(() => solution(['Hellolo', 'Helll*olo']), `Must be TRUE`);
    helper(() => solution(['Hellolo', 'He.*lo']), `Must be TRUE`);
    helper(() => solution(['Hellolo', 'He.*olo']), `Must be TRUE`);
    helper(() => solution(['Hellolo', 'He.*lolo']), `Must be TRUE`);
    helper(() => solution(['a', '.*']), `Must be TRUE`);
    helper(() => solution(['a', 'a*']), `Must be TRUE`);
    helper(() => solution(['aaa', '.*']), `Must be TRUE`);
    helper(() => solution(['aaa', 'a*']), `Must be TRUE`);
    helper(() => solution(['a', 'ab*']), `Must be TRUE`);
    helper(() => solution(['aaa', 'l*']), `Must be FALSE`);
    helper(() => solution(['aa', 'a*']), `Must be TRUE`);
    helper(() => solution(['ab', '.*c']), `Must be FALSE`);
}
