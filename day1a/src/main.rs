fn main() {
    let input = include_str!("./input.txt");
    let lines: Vec<i32> = input
        .lines()
        .map(|line| line.parse::<i32>().unwrap())
        .collect();
    let mut score = 0;
    for i in 1..lines.len() {
        if lines[i] > lines[i - 1] {
            score += 1;
        }
    }

    println!("Answer {}", score);
}
