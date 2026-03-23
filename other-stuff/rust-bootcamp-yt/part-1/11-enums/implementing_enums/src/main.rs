#[derive(Debug)] // allows printing with {:?}

enum Direction {
    North,
    South,
    East,
    West,
}

fn move_player(dir: Direction) {
    match dir {
        Direction::North => println!("Moving Up ⬆️"),
        Direction::South => println!("Moving Down ⬇️"),
        Direction::East => println!("Moving Right ➡️"),
        Direction::West => println!("Moving Left ⬅️"),
    }
}

fn main() {
    let my_dir = Direction::South;

    println!("Current direction: {:?}", my_dir);

    move_player(my_dir);
}
