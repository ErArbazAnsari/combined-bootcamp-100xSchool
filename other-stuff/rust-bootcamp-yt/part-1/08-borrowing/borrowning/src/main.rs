fn main() {
    let mut name = String::from("arbaz");
    let name2 = &name;

    println!("{}", name);
    println!("{}", name2);

    update_me(&mut name);
    println!("update: {}", name);
}

fn update_me(s: &mut String) {
    s.push_str("update name");
}
