const lorem = '         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolorem praesentium sapiente culpa id error ipsam perferendis ipsum maiores expedita assumenda fugiat fuga, saepe necessitatibus minima laborum dignissimos quisquam corrupti!          ';

function smallString(string) {
    const maxSizeString = 30;
    let tempString = string;

    if (typeof tempString !== 'string') {
        console.log('Введена не строка');
        return tempString
    }

    tempString = tempString.trim();

    return tempString.length < maxSizeString ? tempString : tempString.substring(0, maxSizeString) + '...';
}

console.log(smallString(lorem));