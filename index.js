function func(s, a, b) {
    if (!s) {
        return -1;
        //проверяю `s` - если не определена или пуста, то функция возвращает -1.
    }

    const aIndex = s.lastIndexOf(a);
    const bIndex = s.lastIndexOf(b);
    // нахожу последний индекс `a` в строке `s` и `b` в строке `s`.

    if (aIndex === -1 && bIndex === -1) {
        return -1;
        // если `a` и `b` не найдены в `s`, функция возвращает -1.
    }

    return Math.max(aIndex, bIndex);
    // если найдены, функция возвращает максимальное значение индекса `a` или `b`.
}

