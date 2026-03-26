struct Student {
    roll_no: i32, // 4 bytes
    name: String, // address of memory
}
fn main() {
    let l = Student {
        roll_no: 24018,
        name: String::from("arbaz"),
    };

    println!("{}", l.name);
}
