// FitTrack - Fitness Tracking Application
// Main JavaScript File

// ==================== DATA & STATE ====================

// Workout data
const workoutsData = [
    {
        id: 1,
        name: "Full Body HIIT",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        category: "home",
        difficulty: "intermediate",
        duration: 30,
        calories: 350,
        description: "High-intensity interval training for full body conditioning",
        exercises: [
            { name: "Jumping Jacks", duration: 60 },
            { name: "Push-ups", duration: 45 },
            { name: "Squats", duration: 45 },
            { name: "Burpees", duration: 30 },
            { name: "Mountain Climbers", duration: 45 },
            { name: "Plank", duration: 60 }
        ]
    },
    {
        id: 2,
        name: "Upper Body Strength",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
        category: "gym",
        difficulty: "intermediate",
        duration: 45,
        calories: 300,
        description: "Build strength with compound upper body movements",
        exercises: [
            { name: "Bench Press", sets: 4, reps: 10 },
            { name: "Rows", sets: 4, reps: 10 },
            { name: "Shoulder Press", sets: 3, reps: 12 },
            { name: "Bicep Curls", sets: 3, reps: 12 },
            { name: "Tricep Dips", sets: 3, reps: 12 }
        ]
    },
    {
        id: 3,
        name: "Beginner Cardio",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
        category: "home",
        difficulty: "beginner",
        duration: 20,
        calories: 200,
        description: "Easy cardio workout for beginners",
        exercises: [
            { name: "Marching in Place", duration: 120 },
            { name: "Arm Circles", duration: 60 },
            { name: "Leg Lifts", duration: 60 },
            { name: "Side Steps", duration: 90 },
            { name: "Gentle Stretching", duration: 120 }
        ]
    },
    {
        id: 4,
        name: "Leg Day",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
        category: "gym",
        difficulty: "intermediate",
        duration: 50,
        calories: 400,
        description: "Intense leg workout for building lower body strength",
        exercises: [
            { name: "Squats", sets: 4, reps: 10 },
            { name: "Lunges", sets: 3, reps: 12 },
            { name: "Leg Press", sets: 4, reps: 10 },
            { name: "Calf Raises", sets: 4, reps: 15 },
            { name: "Leg Curls", sets: 3, reps: 12 }
        ]
    },
    {
        id: 5,
        name: "Core Crusher",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        category: "home",
        difficulty: "beginner",
        duration: 15,
        calories: 150,
        description: "Strengthen your core with these targeted exercises",
        exercises: [
            { name: "Crunches", duration: 45 },
            { name: "Plank", duration: 60 },
            { name: "Russian Twists", duration: 45 },
            { name: "Leg Raises", duration: 45 },
            { name: "Bicycle Crunches", duration: 45 }
        ]
    },
    {
        id: 6,
        name: "Full Body Strength",
        image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&h=300&fit=crop",
        category: "gym",
        difficulty: "intermediate",
        duration: 60,
        calories: 450,
        description: "Complete strength training for all muscle groups",
        exercises: [
            { name: "Deadlifts", sets: 4, reps: 8 },
            { name: "Bench Press", sets: 4, reps: 10 },
            { name: "Pull-ups", sets: 3, reps: 8 },
            { name: "Squats", sets: 4, reps: 10 },
            { name: "Shoulder Press", sets: 3, reps: 10 }
        ]
    }
];

// Motivational quotes
const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Don't wish for it, work for it.",
    "Success starts with self-discipline.",
    "Every workout counts. Keep pushing!",
    "The only way to define your limits is by going beyond them.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "The hard days are the best because that's when champions are made.",
    "Your health is an investment, not an expense."
];

// Achievements data
const achievementsData = [
    { id: "first_workout", name: "First Step", description: "Complete your first workout", icon: "fa-shoe-prints", unlocked: false },
    { id: "streak_3", name: "Consistency", description: "Maintain a 3-day streak", icon: "fa-fire", unlocked: false },
    { id: "streak_7", name: "Week Warrior", description: "Maintain a 7-day streak", icon: "fa-calendar-week", unlocked: false },
    { id: "streak_30", name: "Monthly Master", description: "Maintain a 30-day streak", icon: "fa-crown", unlocked: false },
    { id: "workouts_10", name: "Dedicated", description: "Complete 10 workouts", icon: "fa-dumbbell", unlocked: false },
    { id: "workouts_50", name: "Fitness Enthusiast", description: "Complete 50 workouts", icon: "fa-medal", unlocked: false },
    { id: "calories_1000", name: "Calorie Crusher", description: "Burn 1000 calories", icon: "fa-fire-alt", unlocked: false },
    { id: "calories_5000", name: "Fat Burner", description: "Burn 5000 calories", icon: "fa-bolt", unlocked: false },
    { id: "water_8", name: "Hydrated", description: "Drink 8 glasses of water in a day", icon: "fa-tint", unlocked: false },
    { id: "early_bird", name: "Early Bird", description: "Complete a workout before 7 AM", icon: "fa-sun", unlocked: false }
];

// App state
let appState = {
    user: null,
    waterIntake: 0,
    todayWorkouts: [],
    workoutHistory: [],
    weightHistory: [],
    points: 0,
    streak: 0,
    lastWorkoutDate: null,
    achievements: [...achievementsData],
    reminderEnabled: true,
    reminderTime: "09:00"
};

// Timer state
let timerState = {
    interval: null,
    seconds: 0,
    isRunning: false
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    loadAppState();
    initializeApp();
});

function initializeApp() {
    // Check if user profile exists
    if (appState.user) {
        showAppScreen();
        updateUI();
    } else {
        showOnboardingScreen();
    }

    // Set up event listeners
    setupEventListeners();
    
    // Update greeting
    updateGreeting();
    
    // Load workouts
    renderWorkouts();
    
    // Load achievements
    renderAchievements();
    
    // Update stats
    updateStats();
    
    // Initialize charts
    initializeCharts();
}

function loadAppState() {
    const savedState = localStorage.getItem('fittrack_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            // Merge saved state with default state to preserve structure
            appState = {
                ...appState,
                ...parsed,
                // Ensure arrays are properly restored
                todayWorkouts: Array.isArray(parsed.todayWorkouts) ? parsed.todayWorkouts : [],
                workoutHistory: Array.isArray(parsed.workoutHistory) ? parsed.workoutHistory : [],
                weightHistory: Array.isArray(parsed.weightHistory) ? parsed.weightHistory : [],
                achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [...achievementsData]
            };
            
            // Reset daily water intake if it's a new day
            const today = new Date().toDateString();
            const lastDate = localStorage.getItem('fittrack_last_date');
            if (lastDate !== today) {
                appState.waterIntake = 0;
                appState.todayWorkouts = [];
                localStorage.setItem('fittrack_last_date', today);
            }
        } catch (e) {
            console.error('Failed to parse saved state:', e);
            // Keep default appState on error
        }
    }
    saveAppState();
}

function saveAppState() {
    localStorage.setItem('fittrack_state', JSON.stringify(appState));
    localStorage.setItem('fittrack_last_date', new Date().toDateString());
}

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    // Onboarding form
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleOnboardingSubmit);
    }

    // Tab navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Water glasses
    const glasses = document.querySelectorAll('.glass');
    glasses.forEach(glass => {
        glass.addEventListener('click', () => toggleWaterGlass(parseInt(glass.dataset.glass)));
    });

    // Workout filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => filterWorkouts(btn.dataset.filter));
    });

    // Timer controls
    document.getElementById('start-timer')?.addEventListener('click', startTimer);
    document.getElementById('pause-timer')?.addEventListener('click', pauseTimer);
    document.getElementById('reset-timer')?.addEventListener('click', resetTimer);
    document.getElementById('complete-workout')?.addEventListener('click', completeWorkout);

    // Modal close
    document.getElementById('close-modal')?.addEventListener('click', closeModal);
    document.getElementById('workout-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'workout-modal') closeModal();
    });

    // Weight logging
    document.getElementById('log-weight-btn')?.addEventListener('click', logWeight);

    // New quote
    document.getElementById('new-quote-btn')?.addEventListener('click', showNewQuote);

    // Edit profile form
    const editProfileForm = document.getElementById('edit-profile-form');
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', handleEditProfile);
    }

    // Reminder toggle
    document.getElementById('reminder-toggle')?.addEventListener('change', toggleReminder);

    // Reminder time
    document.getElementById('reminder-time')?.addEventListener('change', updateReminderTime);

    // Export data
    document.getElementById('export-data-btn')?.addEventListener('click', exportData);

    // Reset data
    document.getElementById('reset-data-btn')?.addEventListener('click', resetData);
}

// ==================== SCREEN MANAGEMENT ====================

function showOnboardingScreen() {
    document.getElementById('onboarding-screen').classList.add('active');
    document.getElementById('app-screen').classList.remove('active');
}

function showAppScreen() {
    document.getElementById('onboarding-screen').classList.remove('active');
    document.getElementById('app-screen').classList.add('active');
}

// ==================== ONBOARDING ====================

function handleOnboardingSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('user-name').value.trim();
    const age = parseInt(document.getElementById('user-age').value);
    const weight = parseFloat(document.getElementById('user-weight').value);
    const height = parseFloat(document.getElementById('user-height').value);
    const goal = document.getElementById('fitness-goal').value;

    if (!name || !age || !weight || !height || !goal) {
        showToast('Please fill in all fields');
        return;
    }

    appState.user = {
        name,
        age,
        weight,
        height,
        goal,
        createdAt: new Date().toISOString()
    };

    // Initialize weight history
    appState.weightHistory = [{
        date: new Date().toISOString(),
        weight: weight
    }];

    saveAppState();
    showAppScreen();
    updateUI();
    showToast('Profile created successfully!');
}

// ==================== TAB NAVIGATION ====================

function switchTab(tabName) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // Refresh charts if progress tab
    if (tabName === 'progress') {
        updateCharts();
    }
}

// ==================== WATER TRACKING ====================

function toggleWaterGlass(glassNumber) {
    if (glassNumber <= appState.waterIntake) {
        appState.waterIntake = glassNumber - 1;
    } else {
        appState.waterIntake = glassNumber;
    }
    
    updateWaterDisplay();
    saveAppState();
    
    // Check for achievement
    if (appState.waterIntake >= 8) {
        unlockAchievement('water_8');
    }
}

function updateWaterDisplay() {
    const glasses = document.querySelectorAll('.glass');
    glasses.forEach((glass, index) => {
        if (index < appState.waterIntake) {
            glass.classList.add('filled');
        } else {
            glass.classList.remove('filled');
        }
    });
    
    document.getElementById('water-count').textContent = appState.waterIntake;
}

// ==================== WORKOUTS ====================

function renderWorkouts(filter = 'all') {
    const workoutsList = document.getElementById('workouts-list');
    if (!workoutsList) return;

    let filteredWorkouts = workoutsData;
    
    if (filter !== 'all') {
        filteredWorkouts = workoutsData.filter(workout => 
            workout.category === filter || workout.difficulty === filter
        );
    }

    workoutsList.innerHTML = filteredWorkouts.map(workout => `
        <div class="workout-card" data-workout-id="${workout.id}">
            <div class="workout-card-image">
                <img src="${workout.image}" alt="${workout.name}" loading="lazy">
                <div class="workout-card-overlay">
                    <span class="workout-badge ${workout.difficulty}">${workout.difficulty}</span>
                </div>
            </div>
            <div class="workout-card-content">
                <div class="workout-card-header">
                    <h4>${workout.name}</h4>
                </div>
                <p class="workout-description">${workout.description}</p>
                <div class="workout-meta">
                    <span><i class="fas fa-clock"></i> ${workout.duration} min</span>
                    <span><i class="fas fa-fire"></i> ${workout.calories} cal</span>
                    <span><i class="fas fa-${workout.category === 'gym' ? 'dumbbell' : 'home'}"></i> ${workout.category}</span>
                </div>
                <button class="btn-primary start-workout-btn" onclick="openWorkoutModal(${workout.id})">
                    <i class="fas fa-play"></i> Start Workout
                </button>
            </div>
        </div>
    `).join('');
}

function filterWorkouts(filter) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderWorkouts(filter);
}

function openWorkoutModal(workoutId) {
    const workout = workoutsData.find(w => w.id === workoutId);
    if (!workout) return;

    const modal = document.getElementById('workout-modal');
    const modalName = document.getElementById('modal-workout-name');
    const modalDetails = document.getElementById('modal-workout-details');

    modalName.textContent = workout.name;
    
    let exercisesHTML = '<div class="exercise-list">';
    workout.exercises.forEach((exercise, index) => {
        if (exercise.duration) {
            exercisesHTML += `
                <div class="exercise-item">
                    <span class="exercise-number">${index + 1}</span>
                    <div class="exercise-info">
                        <span class="exercise-name">${exercise.name}</span>
                        <span class="exercise-detail">${exercise.duration} seconds</span>
                    </div>
                </div>
            `;
        } else {
            exercisesHTML += `
                <div class="exercise-item">
                    <span class="exercise-number">${index + 1}</span>
                    <div class="exercise-info">
                        <span class="exercise-name">${exercise.name}</span>
                        <span class="exercise-detail">${exercise.sets} sets × ${exercise.reps} reps</span>
                    </div>
                </div>
            `;
        }
    });
    exercisesHTML += '</div>';

    modalDetails.innerHTML = exercisesHTML;
    
    // Store current workout
    modal.dataset.workoutId = workoutId;
    modal.dataset.workoutDuration = workout.duration;
    
    // Reset timer
    resetTimer();
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('workout-modal');
    modal.classList.remove('active');
    pauseTimer();
}

// ==================== TIMER ====================

function startTimer() {
    if (timerState.isRunning) return;
    
    timerState.isRunning = true;
    document.getElementById('start-timer').disabled = true;
    document.getElementById('pause-timer').disabled = false;
    
    timerState.interval = setInterval(() => {
        timerState.seconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    if (!timerState.isRunning) return;
    
    timerState.isRunning = false;
    clearInterval(timerState.interval);
    document.getElementById('start-timer').disabled = false;
    document.getElementById('pause-timer').disabled = true;
}

function resetTimer() {
    pauseTimer();
    timerState.seconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerState.seconds / 60);
    const seconds = timerState.seconds % 60;
    
    document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
}

function completeWorkout() {
    const modal = document.getElementById('workout-modal');
    const workoutId = parseInt(modal.dataset.workoutId);
    const workout = workoutsData.find(w => w.id === workoutId);
    
    if (!workout) return;

    // Calculate calories based on time spent
    const timeSpentMinutes = Math.floor(timerState.seconds / 60);
    const caloriesBurned = workout.duration > 0 ? Math.round((workout.calories / workout.duration) * timeSpentMinutes) : 0;

    // Add to today's workouts
    const workoutEntry = {
        id: Date.now(),
        workoutId: workout.id,
        name: workout.name,
        duration: timeSpentMinutes,
        calories: caloriesBurned,
        completedAt: new Date().toISOString()
    };

    appState.todayWorkouts.push(workoutEntry);
    appState.workoutHistory.push(workoutEntry);
    
    // Update points
    appState.points += Math.round(caloriesBurned / 10);
    
    // Update streak
    updateStreak();
    
    // Check for achievements
    checkWorkoutAchievements();
    
    saveAppState();
    closeModal();
    updateUI();
    
    showToast(`Workout completed! +${Math.round(caloriesBurned / 10)} points`);
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastWorkout = appState.lastWorkoutDate ? new Date(appState.lastWorkoutDate).toDateString() : null;
    
    if (lastWorkout === today) {
        // Already worked out today
        return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (lastWorkout === yesterdayStr) {
        // Consecutive day
        appState.streak++;
    } else if (lastWorkout !== today) {
        // Streak broken or first workout
        appState.streak = 1;
    }
    
    appState.lastWorkoutDate = new Date().toISOString();
}

function checkWorkoutAchievements() {
    const totalWorkouts = appState.workoutHistory.length;
    const totalCalories = appState.workoutHistory.reduce((sum, w) => sum + w.calories, 0);
    
    // First workout
    if (totalWorkouts === 1) {
        unlockAchievement('first_workout');
    }
    
    // 10 workouts
    if (totalWorkouts >= 10) {
        unlockAchievement('workouts_10');
    }
    
    // 50 workouts
    if (totalWorkouts >= 50) {
        unlockAchievement('workouts_50');
    }
    
    // Streak achievements
    if (appState.streak >= 3) {
        unlockAchievement('streak_3');
    }
    if (appState.streak >= 7) {
        unlockAchievement('streak_7');
    }
    if (appState.streak >= 30) {
        unlockAchievement('streak_30');
    }
    
    // Calorie achievements
    if (totalCalories >= 1000) {
        unlockAchievement('calories_1000');
    }
    if (totalCalories >= 5000) {
        unlockAchievement('calories_5000');
    }
    
    // Early bird (before 7 AM)
    const hour = new Date().getHours();
    if (hour < 7) {
        unlockAchievement('early_bird');
    }
}

// ==================== PROGRESS & STATS ====================

function updateStats() {
    const todayCalories = appState.todayWorkouts.reduce((sum, w) => sum + w.calories, 0);
    const todayTime = appState.todayWorkouts.reduce((sum, w) => sum + w.duration, 0);
    const todayWorkouts = appState.todayWorkouts.length;
    
    const totalWorkouts = appState.workoutHistory.length;
    const totalMinutes = appState.workoutHistory.reduce((sum, w) => sum + w.duration, 0);
    const totalCalories = appState.workoutHistory.reduce((sum, w) => sum + w.calories, 0);
    
    // Update home tab stats
    document.getElementById('today-calories').textContent = todayCalories;
    document.getElementById('today-time').textContent = todayTime;
    document.getElementById('today-workouts').textContent = todayWorkouts;
    
    // Update progress tab stats
    document.getElementById('total-workouts').textContent = totalWorkouts;
    document.getElementById('total-minutes').textContent = totalMinutes;
    document.getElementById('total-calories').textContent = totalCalories;
    document.getElementById('current-streak').textContent = `${appState.streak} days`;
    
    // Update header badges
    document.getElementById('streak-count').textContent = appState.streak;
    document.getElementById('points-count').textContent = appState.points;
}

function logWeight() {
    const weightInput = document.getElementById('new-weight');
    const weight = parseFloat(weightInput.value);
    
    if (!weight || weight < 30 || weight > 300) {
        showToast('Please enter a valid weight (30-300 kg)');
        return;
    }
    
    appState.weightHistory.push({
        date: new Date().toISOString(),
        weight: weight
    });
    
    // Update user's current weight
    if (appState.user) {
        appState.user.weight = weight;
    }
    
    saveAppState();
    updateCharts();
    updateUI();
    
    weightInput.value = '';
    showToast('Weight logged successfully!');
}

// ==================== CHARTS ====================

let weightChart = null;
let consistencyChart = null;

function initializeCharts() {
    // Weight chart
    const weightCtx = document.getElementById('weight-chart')?.getContext('2d');
    if (weightCtx) {
        weightChart = new Chart(weightCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Weight (kg)',
                    data: [],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Consistency chart
    const consistencyCtx = document.getElementById('consistency-chart')?.getContext('2d');
    if (consistencyCtx) {
        consistencyChart = new Chart(consistencyCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Workouts',
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: '#6366f1',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    updateCharts();
}

function updateCharts() {
    // Update weight chart
    if (weightChart && appState.weightHistory.length > 0) {
        const last7Weights = appState.weightHistory.slice(-7);
        weightChart.data.labels = last7Weights.map(w => {
            const date = new Date(w.date);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });
        weightChart.data.datasets[0].data = last7Weights.map(w => w.weight);
        weightChart.update();
    }

    // Update consistency chart
    if (consistencyChart) {
        const weekData = getWeeklyWorkoutData();
        consistencyChart.data.datasets[0].data = weekData;
        consistencyChart.update();
    }
}

function getWeeklyWorkoutData() {
    const days = [0, 0, 0, 0, 0, 0, 0]; // Mon-Sun
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

    appState.workoutHistory.forEach(workout => {
        const workoutDate = new Date(workout.completedAt);
        if (workoutDate >= startOfWeek) {
            const dayIndex = (workoutDate.getDay() + 6) % 7; // Convert to Mon=0, Sun=6
            days[dayIndex]++;
        }
    });

    return days;
}

// ==================== ACHIEVEMENTS ====================

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;

    achievementsGrid.innerHTML = appState.achievements.map(achievement => `
        <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon">
                <i class="fas ${achievement.icon}"></i>
            </div>
            <div class="achievement-info">
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
            </div>
            ${achievement.unlocked ? '<i class="fas fa-check achievement-check"></i>' : ''}
        </div>
    `).join('');
}

function unlockAchievement(achievementId) {
    const achievement = appState.achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        saveAppState();
        renderAchievements();
        showToast(`Achievement unlocked: ${achievement.name}!`);
    }
}

// ==================== PROFILE ====================

function handleEditProfile(e) {
    e.preventDefault();
    
    const name = document.getElementById('edit-name').value.trim();
    const age = parseInt(document.getElementById('edit-age').value);
    const weight = parseFloat(document.getElementById('edit-weight').value);
    const height = parseFloat(document.getElementById('edit-height').value);
    const goal = document.getElementById('edit-goal').value;

    if (!name || !age || !weight || !height || !goal) {
        showToast('Please fill in all fields');
        return;
    }

    appState.user = {
        ...appState.user,
        name,
        age,
        weight,
        height,
        goal
    };

    saveAppState();
    updateUI();
    showToast('Profile updated successfully!');
}

function updateProfileDisplay() {
    if (!appState.user) return;

    document.getElementById('profile-name').textContent = appState.user.name;
    document.getElementById('profile-goal').textContent = formatGoal(appState.user.goal);
    document.getElementById('profile-age').textContent = appState.user.age;
    document.getElementById('profile-weight').textContent = `${appState.user.weight} kg`;
    document.getElementById('profile-height').textContent = `${appState.user.height} cm`;

    // Populate edit form
    document.getElementById('edit-name').value = appState.user.name;
    document.getElementById('edit-age').value = appState.user.age;
    document.getElementById('edit-weight').value = appState.user.weight;
    document.getElementById('edit-height').value = appState.user.height;
    document.getElementById('edit-goal').value = appState.user.goal;
}

function formatGoal(goal) {
    const goals = {
        'weight-loss': 'Weight Loss',
        'muscle-gain': 'Muscle Gain',
        'maintenance': 'Maintenance'
    };
    return goals[goal] || goal;
}

// ==================== REMINDERS ====================

function toggleReminder(e) {
    appState.reminderEnabled = e.target.checked;
    saveAppState();
    
    if (appState.reminderEnabled) {
        showToast('Daily reminders enabled');
    } else {
        showToast('Daily reminders disabled');
    }
}

function updateReminderTime(e) {
    appState.reminderTime = e.target.value;
    saveAppState();
    showToast(`Reminder time set to ${appState.reminderTime}`);
}

// ==================== DATA MANAGEMENT ====================

function exportData() {
    const dataStr = JSON.stringify(appState, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `fittrack-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    showToast('Data exported successfully!');
}

function resetData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
        localStorage.removeItem('fittrack_state');
        localStorage.removeItem('fittrack_last_date');
        location.reload();
    }
}

// ==================== UTILITIES ====================

function updateGreeting() {
    const greetingEl = document.getElementById('greeting');
    if (!greetingEl) return;

    const hour = new Date().getHours();
    let greeting = 'Good morning';
    
    if (hour >= 12 && hour < 17) {
        greeting = 'Good afternoon';
    } else if (hour >= 17) {
        greeting = 'Good evening';
    }

    if (appState.user) {
        greetingEl.textContent = `${greeting}, ${appState.user.name}!`;
    } else {
        greetingEl.textContent = greeting;
    }
}

function showNewQuote() {
    const quoteEl = document.getElementById('motivation-quote');
    if (!quoteEl) return;

    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quoteEl.textContent = motivationalQuotes[randomIndex];
}

function updateTodayWorkout() {
    const todayWorkoutCard = document.getElementById('today-workout-card');
    if (!todayWorkoutCard) return;

    if (appState.todayWorkouts.length > 0) {
        const lastWorkout = appState.todayWorkouts[appState.todayWorkouts.length - 1];
        todayWorkoutCard.innerHTML = `
            <div class="workout-preview-card">
                <h4>${lastWorkout.name}</h4>
                <p>Completed ${formatTimeAgo(lastWorkout.completedAt)}</p>
                <p><i class="fas fa-clock"></i> ${lastWorkout.duration} min | <i class="fas fa-fire"></i> ${lastWorkout.calories} cal</p>
            </div>
        `;
    } else {
        todayWorkoutCard.innerHTML = '<p class="no-workout">No workout scheduled for today. Start one from the Workouts tab!</p>';
    }
}

function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function showToast(message) {
    const toast = document.getElementById('notification-toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function updateUI() {
    updateGreeting();
    updateWaterDisplay();
    updateStats();
    updateProfileDisplay();
    updateTodayWorkout();
    renderAchievements();
}
