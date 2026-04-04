fn main() {
    let b = Box::new(5);
    println!("b = {b}"); // This will print the address of the box => 5 // automatically dereferenced
    println!("b = {}", *b); // This will print the value of the box => 5 // manually dereferenced
}
