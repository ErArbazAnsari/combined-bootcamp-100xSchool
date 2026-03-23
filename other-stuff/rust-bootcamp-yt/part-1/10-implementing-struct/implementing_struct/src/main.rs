struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}

fn main() {
    let rect = Rect {
        width: 10,
        height: 20,
    };
    println!("area of rectange is: {}", rect.area());
}
