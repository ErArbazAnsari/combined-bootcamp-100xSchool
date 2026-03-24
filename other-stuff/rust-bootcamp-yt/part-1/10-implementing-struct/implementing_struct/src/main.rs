struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
    fn perimeter(&self) -> u32 {
        return 2 * self.width * self.height;
    }
    fn hello() -> String {
        return String::from("hello from arbaz");
    }
}

fn main() {
    let rect = Rect {
        width: 10,
        height: 20,
    };
    println!("area of rectange is: {}", rect.area());
    println!("perimeter of rectange is: {}", rect.perimeter());

    println!("static fuction calling: {}", Rect::hello());
}
