
import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathService } from './services/math.service';
import { MathTopic } from './models/math-topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  private mathService = inject(MathService);

  topics = signal<MathTopic[]>([]);
  selectedTopic = signal<MathTopic | null>(null);
  visibleSolutions = signal<Map<number, boolean>>(new Map());

  ngOnInit() {
    const allTopics = this.mathService.getTopics();
    this.topics.set(allTopics);
    if (allTopics.length > 0) {
      this.selectTopic(allTopics[0]);
    }
  }

  selectTopic(topic: MathTopic): void {
    this.selectedTopic.set(topic);
    this.visibleSolutions.set(new Map()); // Reset visibility when changing topic
  }

  toggleSolution(activityIndex: number): void {
    this.visibleSolutions.update(currentMap => {
      const newMap = new Map(currentMap);
      newMap.set(activityIndex, !newMap.get(activityIndex));
      return newMap;
    });
  }
}
