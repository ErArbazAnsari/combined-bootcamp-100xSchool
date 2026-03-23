fn main() {
    let a = 10;
    let b = 20;

    // Pass by value (copy)
    println!("{} + {} = {}", a, b, sum(a, b));

    // Pass by reference (mutable borrow)
    let mut x = 10;
    let mut y = 20;

    update_it(&mut x, &mut y);
    println!("After update: x = {}, y = {}", x, y);

    // owner ship
    let name = String::from("my name is arbaz");
    let name2 = name;

    // println!("name->{}", name); // will throw an error;
    println!("name->{}", name2);
}

// Pass by value
fn sum(a: i32, b: i32) -> i32 {
    a + b
}

// Pass by reference (mutable)
fn update_it(a: &mut i32, b: &mut i32) {
    *a += 1;
    *b += 1;
}
