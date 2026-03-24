pub trait Summary {
    fn summarize(&self) -> String;
}

struct User {
    name: String,
    age: u8,
}

impl Summary for User {
    fn summarize(&self) -> String {
        return format!("user {} is {} years old.", self.name, self.age);
    }
}

fn main() {
    let user = User {
        name: "arbaz".to_string(),
        age: 21,
    };

    println!("summary: {}", user.summarize());
}
