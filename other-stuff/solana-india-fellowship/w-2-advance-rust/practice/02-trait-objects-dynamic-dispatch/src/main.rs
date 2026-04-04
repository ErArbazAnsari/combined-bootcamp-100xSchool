fn main() {
    let a = 1;
    let b = &a;

    println!("a: {}, b: {}", a, b);
    println!("a: {:p}, b: {:p}", &a, &b);
    println!("b: {}", *b);
}
