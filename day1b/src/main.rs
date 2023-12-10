fn main() {
    let input = include_str!("./input.txt");
    let lines: Vec<i32> = input
        .lines()
        .map(|line| line.parse::<i32>().unwrap())
        .collect();

    let mut sum: i32 = lines[0] + lines[1] + lines[2];

    let mut summed_lines: Vec<i32> = Vec::new();
    for i in 3..lines.len() {
        sum += lines[i] - lines[i - 3];
        summed_lines.push(sum);
    }

    let mut score = 0;
    for i in 1..summed_lines.len() {
        if summed_lines[i] > summed_lines[i - 1] {
            score += 1;
        }
    }

    println!("Answer {}", score);
}
