fn main() {
    let my_num = 12345; // default has i32
    let num: i8 = -128;
    let x: i16 = 32767;
    let new_num: u8 = 255;
    println!("my number: {}, {}, {}, {}", num, x, new_num, my_num);

    // booleans
    let is_true = false;
    println!("{}", is_true);

    let age: i8 = 17;
    if age < 18 {
        println!("you are minor still");
    } else if age >= 18 {
        println!("now you are an adult!");
    }

    // strings
    let name = String::from("arbaz ansari");
    println!("your name is {}", name);

    let character = name.chars().nth(10);
    match character {
        Some(c) => println!("{}", c),
        None => println!("no char found!"),
    }
}
