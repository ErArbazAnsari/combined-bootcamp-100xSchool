fn main() {
    // string into stack
    let a: i32 = 125;
    let b: i32 = 125;
    let c: i32 = a + b;

    println!("a+b=>{}", c);

    // into heap
    let mut name: String = String::from("arbaz ansari");
    println!("your name is: {}", name);
    name.push_str(", happy to see you here.");
    println!("updated data: {}", name);

    let mut name2 = name.clone();
    name2.push_str("hello again!!!!!");
    println!("name2 -> {}", name2);
    println!("name1 -> {}", name);

    do_something(name.clone());
    println!("previouse-{}", name);
}

fn do_something(n1: String) {
    println!("\n\n{}", n1);
}
